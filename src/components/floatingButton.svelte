<script>
  import { createEventDispatcher } from 'svelte';
  export let label = '';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('click', {
      text: 'Hello!'
    });
  }
</script>

<div class="fixed bottom-4 right-4">
  <button
    class="bg-blue-600 shadow rounded-full p-4  flex items-center text-white"
    on:click={sayHello}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.9006 16.4999L19.5 16.5L19.4998 5.09985C19.4998 4.70203 19.3418 4.3205 19.0605 4.03919C18.7792 3.75789 18.3977 3.59985 17.9999 3.59985C17.602 3.59985 17.2205 3.75789 16.9392 4.03919C16.6579 4.3205 16.4999 4.70203 16.4999 5.09985L16.5 16.5L5.09985 16.4999C4.70203 16.4999 4.3205 16.6579 4.03919 16.9392C3.75789 17.2205 3.59985 17.6021 3.59985 17.9999C3.59985 18.3977 3.75789 18.7792 4.03919 19.0605C4.3205 19.3418 4.70203 19.4999 5.09985 19.4999L16.5 19.4999L16.4999 30.8998C16.4999 31.2977 16.6579 31.6792 16.9392 31.9605C17.2205 32.2418 17.602 32.3998 17.9999 32.3998C18.3977 32.3998 18.7792 32.2418 19.0605 31.9605C19.3418 31.6792 19.4998 31.2977 19.4998 30.8998L19.5 19.4999L30.9006 19.4999C31.2984 19.4999 31.6799 19.3418 31.9612 19.0605C32.2425 18.7792 32.4006 18.3977 32.4006 17.9999C32.4006 17.6021 32.2425 17.2205 31.9612 16.9392C31.6799 16.6579 31.2984 16.4999 30.9006 16.4999Z"
        fill="white"
      />
    </svg>

    {#if label}
      <p class="px-2">{label}</p>
    {/if}
  </button>
</div>
