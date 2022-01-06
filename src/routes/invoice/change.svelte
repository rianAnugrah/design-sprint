<script>
  import { goto } from '$app/navigation';
  import Button from '../../components/button.svelte';

  const handleBack = () => {
    goto('/invoice/create');
  };
</script>



<Button label="Back" on:click={handleBack}  />
