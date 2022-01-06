<script>
  export let label = '';
</script>

<div class="border border-gray-600 rounded-xl mb-4 ">
  <div class="text-xl font-bold p-2 bg-gray-400 rounded-tr-xl rounded-tl-xl">
    {label}
  </div>
  <div class="p-2 bg-white rounded-br-xl rounded-bl-xl">
    <slot />
  </div>
</div>
