<script>
  import FloatingButton from '../../components/floatingButton.svelte';

  function add(event) {
    window.location.href = '/pelanggan/add';
  }
</script>

<div>
  ini halaman pelanggan

  <FloatingButton on:click={add} />
</div>
