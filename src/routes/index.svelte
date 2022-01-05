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
  import supabase from '$lib/db';
  import Profile from '../components/profile.svelte';
  import SignUp from '../components/signUp.svelte';

  import { user } from '../store/storeSeesion';

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

<div class="container" style="padding: 50px 0 100px 0;">
  {#if $user}
    <Profile />
  {:else}
    <SignUp />
  {/if}
</div>
