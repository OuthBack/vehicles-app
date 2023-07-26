<script lang="ts">
	export let field: string;
  export let value: string | number;
  export let type = 'text';
  export let showLabel = true;
  
  let upperCaseField = field.charAt(0).toUpperCase() + field.slice(1)  

	  function typeAction(node: {type: string}) {
		  node.type = type;
	}
</script>

<div class="mb-4">
  {#if showLabel}
    <label class="block text-gray-700 text-sm font-bold mb-2" for="plate">{upperCaseField}</label>
  {/if}
	<input
		bind:value
    use:typeAction
		class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		id={field}
		type='text'
		placeholder={upperCaseField}
	/>
</div>
