import moment from 'moment';
import { writable } from 'svelte/store';
import { user } from './storeSeesion';

export const invoice = writable({
  created_by: null,
  number: 1,
  date: moment(new Date()).format('YYYY-MM-DD'),
  due_date: moment(new Date()).format('YYYY-MM-DD'),
  // due_days: 0,
  is_active: false,
  status: '',
  is_paid: false,
  payment_method: '',
  total: 0,
  discount: 0,
  customer_id: null,
  tax: 0
});
