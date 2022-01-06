import { writable } from 'svelte/store';

export const ui = writable({
  input: 'border shadow rounded-md p-2 w-full'
});
