<script>
  import { invoice } from '../../store/invoiceStore';

  import supabase from '$lib/db';
  import Button from '../../components/button.svelte';
  import { user } from '../../store/storeSeesion';
import { items } from '../../store/itemsStore';
  let submit = false;

  async function sendData() {
    invoice.set({ ...$invoice, created_by: $user.id, items:$items });
    console.log($user, $invoice);
    const { data, error } = await supabase.from('invoice').insert([$invoice]);
    if (error) throw new Error(error.message);
    return data;
  }
</script>

<div>
  <div>Invoice #{$invoice.number}</div>

  <form on:submit|preventDefault={() => (submit = true)}>
    <Button
      label="Send"
      type="submit"
      value="Submit"
      on:click={() => (submit = false)}
    />
  </form>
</div>

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
