<script>
import FloatingButton from "../../components/floatingButton.svelte";

function add(event) {
    window.location.href = '/karyawan/tambah';
  }
</script>



<FloatingButton on:click={add} label="Karyawan baru"/>
<h1>Data Karyawan</h1>