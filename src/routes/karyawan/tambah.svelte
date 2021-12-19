<script>
    import supabase from '$lib/db';
    let newGame;
    let submit = false;
    import { karyawan } from "../../store/storeKaryawan";
    async function sendData() {
      const { data, error } = await supabase
        .from('karyawan')
        .insert([$karyawan]);
      if (error) throw new Error(error.message);
      return data;
    }
  </script>
  
  <form on:submit|preventDefault={() => (submit = true)} class="flex flex-col">
    <label>Nama</label>
    <input type="text" bind:value={$karyawan.nama} />
    
    <label> Status</label>
    <input type="text" bind:value={$karyawan.status} />
    <label>Jabatan</label>
    <input type="text" bind:value={$karyawan.jabatan} />
    <label>KTP</label>
    <input type="numer" bind:value={$karyawan.ktp} />
    <label>Alamat</label>
    <textarea type="text" bind:value={$karyawan.alamat} />
    <label>No Hp</label>
    <input type="text" bind:value={$karyawan.hp} />
    <input type="submit" value="Submit" on:click={() => (submit = false)} />
  </form>

  <p>
	{JSON.stringify($karyawan, 0, 2)}</p>
  {#if submit}
    {#await sendData()}
      <p>Sending data...</p>
    {:then data}
      <p>Successfully sent data.</p>
    {:catch error}
      <p>Something went wrong while sending the data:</p>
      <pre>{error}</pre>
    {/await}
  {/if}
  