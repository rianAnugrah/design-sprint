<script>
  import FloatingButton from '../../components/floatingButton.svelte';
  import supabase from '$lib/db';
  async function getData() {
    const { data, error } = await supabase.from('karyawan').select();
    if (error) throw new Error(error.message);

    return data;
  }

  function add(event) {
    window.location.href = '/karyawan/tambah';
  }
</script>

<FloatingButton on:click={add} label="Karyawan baru" />
<div class="text-3xl py-8">Data Karyawan</div>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  <div class="flex flex-col">
    {#each data as karyawan}
      <div
        class="flex justify-between items-center bg-white border px-4 py-2 my-2 shadow-lg rounded-md"
      >
        <div class="w-full mr-8">
          <div class="text-lg font-bold">{karyawan.nama}</div>
          <div class="flex justify-start">
            <div class="mr-8 bg-green-600 text-white px-4 py-1 text-xs rounded-full">{karyawan.status ? karyawan.status.toUpperCase() : '-'}</div>

            <div class="w-1/3">{karyawan.hp ? karyawan.hp : '-'}</div>
          </div>
        </div>
        <div>
          <button class="bg-blue-600 text-white p-4 rounded-md shadow"
            >Edit</button
          >
        </div>
      </div>
    {/each}
  </div>
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}
