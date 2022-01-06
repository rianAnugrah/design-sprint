<script>
  import { goto } from '$app/navigation';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { customer } from '../../store/customerStore';
  import { invoice } from '../../store/invoiceStore';
  import supabase from '$lib/db';

  let submit = false;

  const handleBack = () => {
    goto('/invoice/create');
  };

  async function sendData() {
    // invoice.set({ ...$invoice, created_by: $user.id });
    const { data, error } = await supabase.from('customer').insert($customer);
    if (error) throw new Error(error.message);

    if (data) {
      invoice.set({ ...$invoice, customer_id: data[0].id });
      console.log($invoice, data[0]);
    }
    return data;
  }
</script>

<form on:submit|preventDefault={() => (submit = true)}>
  <label>Name</label>
  <input type="text" bind:value={$customer.name} class={$ui.input} />
  <label>Email</label>
  <input type="text" bind:value={$customer.email} class={$ui.input} />
  <label>Phone</label>
  <input type="text" bind:value={$customer.phone} class={$ui.input} />
  <label>Company name</label>
  <input type="text" bind:value={$customer.company_name} class={$ui.input} />
  <Button
    label="Send"
    type="submit"
    value="Submit"
    on:click={() => (submit = false)}
  />
</form>

<Button label="Back" on:click={handleBack} />

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
