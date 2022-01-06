import { writable } from 'svelte/store';

export const item = writable({
  name: '',
  description: '',
  price: '',
  qty: ''
});

export const items = writable([]);
