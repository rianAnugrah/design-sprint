import { writable } from 'svelte/store';

export const ui = writable({
  input: 'border shadow rounded-full px-4 py-2 w-full'
});
