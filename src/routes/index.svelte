<!-- 
<script>
import supabase from '$lib/db'
async function getData() {
  const { data, error } = await supabase
    .from('freelancers')
    .select()
  if (error) throw new Error(error.message)
  
  return data
}


</script>


<h1>My favorite games</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as game}
    <li>{game.id}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await} -->
<script>
  import { goto } from '$app/navigation';

  import { onMount } from 'svelte';

  onMount(async () => {
    goto('/invoice');
  });
</script>

<div>This is holmes</div>
