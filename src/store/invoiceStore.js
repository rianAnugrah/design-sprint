import { writable } from 'svelte/store';

export const invoice = writable({
  number: '1',
  date: "06 Jan 2022",
  due_days: 7,
  due_date: "15 Jan 2022",
  my_signature: false,
  notes: '',
  status: '',
  is_read: '',
  is_paid: ''
});
