<script>
  import Navigation from "../components/navigation.svelte";
</script>

<div class="w-screen h-screen bg-slate-300 flex flex-col md:flex-row">

  <Navigation />
  <div class="mt-4">
    <slot />
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
