<script>
  import supabase from '$lib/db';
  import Dashboard from '../components/dashboard.svelte';
  import Profile from '../components/profile.svelte';
  import SignUp from '../components/signUp.svelte';

  import { user } from '../store/storeSeesion';

  import Search from '../components/search.svelte';
  import Navigation from '../components/navigation.svelte';

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

<!-- {#if $user} -->
<div class="w-screen h-screen bg-slate-100 flex flex-col md:flex-row">
  <Navigation />

  <div class="w-full h-full p-4">
    <div class="w-full py-2">
      <Search />
    </div>
    <slot />
    <div class="h-24 block " />
  </div>
</div>

<!-- {:else}
  <SignUp />
{/if} -->
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
