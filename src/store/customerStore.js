import { writable } from 'svelte/store';

export const customer = writable({
  name: '',
  email: '',
  phone: '',
  company_name: ''
});
