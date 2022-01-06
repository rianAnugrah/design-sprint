<script>
  import { goto } from '$app/navigation';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { customer } from '../../store/customerStore';

  const handleBack = () => {
    goto('/invoice/create');
  };
</script>

<label>Name</label>
<input type="text" bind:value={$customer.name} class={$ui.input} />
<label>Email</label>
<input type="text" bind:value={$customer.email} class={$ui.input} />
<label>Phone</label>
<input type="text" bind:value={$customer.phone} class={$ui.input} />
<label>Company name</label>
<input type="text" bind:value={$customer.company_name} class={$ui.input} />

<Button label="Back" on:click={handleBack} />
