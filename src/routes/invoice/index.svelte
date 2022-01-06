<script>
  import { goto } from '$app/navigation';

  import FloatingButton from '../../components/floatingButton.svelte';

  const handleClick = () => {
    goto('/invoice/create');
  };
</script>

<div>this is INvoice List</div>

<FloatingButton on:click={handleClick} />
