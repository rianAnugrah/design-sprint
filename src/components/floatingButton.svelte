<script>
  import Icon from './Icon.svelte';

</script>

<div class="fixed bottom-24 right-8">
  <button
    class="bg-blue-600 shadow rounded-full w-14 h-14 p-2"
    on:click={fire('click')}
  >
    <Icon name="plus" customClass="h-10 w-10 text-white" />
  </button>
</div>
