<script lang='ts'>
	import { onMount } from 'svelte';
	import FormField from '../components/FormField.svelte';
  import axios from 'axios'
	import { infiniteScroll } from '../functions/infiniteScroll';
	import ListItem from '../components/ListItem.svelte';
  import { PUBLIC_SERVER_API } from '$env/static/public';

  type Vehicle = {
    plate: string
    brand: string
    model: string
    year: number 
  }

  type GetVehicleDto = {
    vehicles: Vehicle[];
    totalPages: number;
  }

  let pagination = {
    page: 1,
    limit: 10
  } 
  let formFields = {
    plate: '',
    brand: '',
    model: '',
    year: '',
  }
  let vehicles: Vehicle[] = []
  let hasMore = true
  let isLoadingVehicle = false

  let elementRef: HTMLElement | null = null;
  $: {
    if (elementRef) {
      infiniteScroll({ fetch: load, element: elementRef });
    }
  }

  const api = axios.create({baseURL: PUBLIC_SERVER_API })

  function load() {
    if(!hasMore){
      return
    }

    setTimeout(() => {
      pagination = {...pagination, page: pagination.page + 1};
      getVehicles();
    }, 300); // WE WAITED A FEW SECONDS
  };

  async function createVehicle() {
    await api.post('/api/vehicles', {...formFields, year: +formFields.year})
    vehicles = []
    hasMore = true
    getVehicles()
  }

  async function getVehicles() {
    isLoadingVehicle = true
    const { data } = await api.get<typeof pagination, {data: GetVehicleDto}>('/api/vehicles', {params: pagination})
    vehicles = vehicles.concat(data.vehicles)  

    if(pagination.page <= pagination.page){
      hasMore = false
      pagination = { ...pagination, page: 1 }
    }

    isLoadingVehicle = false
  }

  async function deleteVehicle(plate: string){
    await api.delete(`/api/vehicles/${plate}`)
    vehicles = vehicles.filter(({plate: p}) => plate !== p)
  }

  async function updateVehicle(vehicle: Vehicle){
    vehicles = vehicles.map(v => {
        if(v.plate === vehicle.plate){
          console.log(vehicle)
          return vehicle
        }

        return v
    })
    await api.patch(`/api/vehicles/${vehicle.plate}`, vehicle)
  }

  onMount(getVehicles)

</script>

<head>
	<link
		href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
	/>
	<title>Vehicle Management</title>
</head>
<body class="p-10">
	<h1 class="text-4xl mb-8">Add a Vehicle</h1>

	<form on:submit={createVehicle} class="mb-8">
		<FormField bind:value={formFields.plate} field={'plate'} />
		<FormField bind:value={formFields.brand} field={'brand'} />
		<FormField bind:value={formFields.model} field={'model'} />
		<FormField bind:value={formFields.year} type='number' field={'year'} />
		<div class="flex items-center justify-between">
			<button
        
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Add Vehicle
			</button>
		</div>
	</form>

	<h1 class="text-4xl mb-8">List of Vehicles</h1>
	<table class="table-auto w-full text-left">
		<thead>
			<tr>
				<th class="px-4 py-2">Plate</th>
				<th class="px-4 py-2">Brand</th>
				<th class="px-4 py-2">Model</th>
				<th class="px-4 py-2">Year</th>
				<th class="px-4 py-2">Actions</th>
			</tr>
		</thead>
    <tbody>
      {#each vehicles as vehicle}
        <ListItem bind:vehicle={vehicle} functions={{deleteVehicle, updateVehicle}}></ListItem>
      {/each}
      <tr>
        <td bind:this={elementRef} class="px-4 py-2" colspan="5">{isLoadingVehicle ? 'Loading...' : ''}</td>
      </tr>
    </tbody>
	</table>
</body>
