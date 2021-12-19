<script>
  import Icon from './Icon.svelte';
  import { createEventDispatcher } from 'svelte';
  export let label ="";

const dispatch = createEventDispatcher();

function sayHello() {
  dispatch('click', {
    text: 'Hello!'
  });
}

</script>

<div class="fixed bottom-24 right-2">
  <button
    class="bg-blue-600 shadow rounded-full h-14 p-2 flex items-center text-white"
    on:click={sayHello}
  >
    <Icon name="plus" customClass="h-10 w-10 text-white" />
    {#if label}
    <p class="px-2">{label}</p>
    {/if}
  </button>
</div>
