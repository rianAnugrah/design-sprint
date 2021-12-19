import { writable } from 'svelte/store';

export const karyawan = writable({
  nama: "",
  ktp: 0,
  alamat: "",
  hp: "",
  jabatan: "",
  status: "aktif",
  id_user: null,
})
