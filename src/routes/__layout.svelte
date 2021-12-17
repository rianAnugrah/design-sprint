<div class="w-screen h-screen bg-slate-300 p-2 flex flex-col">
  <div class="w-full  p-4 bg-white shadow">
    <a href="/" class="bg-slate-400 rounded-md border p-2 text-center active:text-white">Home</a>
    <a href="/add" class="bg-slate-400 rounded-md border p-2 text-center active:text-white">Add</a>
  </div>

  <div class="mt-4">
    <slot />
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
