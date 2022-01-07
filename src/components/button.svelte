<script>
  import Icon from './Icon.svelte';
  import { createEventDispatcher } from 'svelte';
  export let label = '';
  export let icon = '';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('click', {
      text: 'Hello!'
    });
  }
</script>

<div class="">
  <button
    class="bg-blue-600 shadow rounded-full  h-[50px] text-center w-[150px] p-2 flex items-center text-white"
    on:click={sayHello}
  >
    {#if icon}
      <Icon name={icon} customClass="h-5 w-5 text-white" />
    {/if}
    {#if label}
      <p class="px-2 text-center w-full">{label}</p>
    {/if}
  </button>
</div>
