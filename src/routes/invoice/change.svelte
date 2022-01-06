<script>
  import { goto } from '$app/navigation';
  import { invoice } from '../../store/invoiceStore';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';

  const handleBack = () => {
    goto('/invoice/create');
  };
</script>

<label>Number</label>
<input type="number" bind:value={$invoice.number} class={$ui.input} />
<label>Date</label>
<input type="date" bind:value={$invoice.date} class={$ui.input} />
<label>Due date</label>
<input type="date" bind:value={$invoice.due_date} class={$ui.input} />
<label>Due days</label>
<input type="number" bind:value={$invoice.due_days} class={$ui.input} />

<Button label="Back" on:click={handleBack} />
