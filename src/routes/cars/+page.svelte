<script lang="ts">
  import Spinner from '$lib/components/spinner.svelte'

  //load from server side
  export let data;
  const cars = JSON.parse(data.cars)

</script>

{#await data}
  <Spinner delay={1000} />
{:then data } 
<div>
  <h1>Cars</h1>
  <ul>
    {#each cars as car}
      <li><a href="/cars/{car.id}">{car.name}</a></li>
    {/each}
  </ul>
</div>
{/await}