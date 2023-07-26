<script lang='ts'>
	import FormField from "./FormField.svelte";

  type Vehicle = {
    plate: string
    brand: string
    model: string
    year: number
  }

  type Functions = {
    updateVehicle: (vehicle: Vehicle) => void
    deleteVehicle: (plate: string) => void
  }

  export let functions: Functions 
  export let vehicle: Vehicle
  const { deleteVehicle, updateVehicle } = functions

  let isEditing = false
  let editVehicle: Vehicle = {
    ...vehicle
  }
</script>

<tr class="border-t border-gray-200">
  {#if isEditing}
    <td class="px-4 py-2">
      <FormField showLabel={false} field={vehicle.plate} bind:value={editVehicle.plate} /> 
    </td>
    <td class="px-4 py-2">
      <FormField showLabel={false} field={vehicle.brand} bind:value={editVehicle.brand} /> 
    </td>
    <td class="px-4 py-2">
      <FormField showLabel={false} field={vehicle.model} bind:value={editVehicle.model} /> 
    </td>
    <td class="px-4 py-2">
      <FormField showLabel={false} type='number' field={vehicle.year.toString()} bind:value={editVehicle.year} /> 
    </td>
    <td class="px-4 py-2 flex justify-start">
      <button on:click={() => {
        updateVehicle(editVehicle)
        isEditing = false
      }} class="mr-2" type="button"><i class="text-green-500 fa-solid fa-check" /></button>
      <button on:click={() => { isEditing = !isEditing}}><i class="text-red-500 fa-solid fa-xmark"></i></button>
    </td>
  {:else}
    <td class="px-4 py-2">{vehicle.plate}</td>
    <td class="px-4 py-2">{vehicle.brand}</td>
    <td class="px-4 py-2">{vehicle.model}</td>
    <td class="px-4 py-2">{vehicle.year}</td>
    <td class="px-4 py-2 flex justify-start">
      <button on:click={() => { isEditing = !isEditing}} class="mr-2" type="button"><i class="fas fa-pencil-alt" /></button>
      <button on:click={() => deleteVehicle(vehicle.plate)} type="button"><i class="fas fa-trash" /></button>
    </td>
  {/if}
</tr>
