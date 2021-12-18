<script>
  import Search from '../components/search.svelte';
  import Navigation from '../components/navigation.svelte';
</script>

<div class="w-screen h-screen bg-slate-100 flex flex-col md:flex-row">
  <Navigation />

  <div class="w-full h-ful p-4">
    <div class="w-full py-2">
      <Search />
    </div>
    <slot />
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
