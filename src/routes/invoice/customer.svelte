<script>
  import { goto } from '$app/navigation';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { customer } from '../../store/customerStore';
  import { invoice } from '../../store/invoiceStore';
  import supabase from '$lib/db';
  import { onMount } from 'svelte';
  import { title } from '../../store/storeSeesion';

  let submit = false;

  async function sendData() {
    // invoice.set({ ...$invoice, created_by: $user.id });
    const { data, error } = await supabase.from('customer').insert($customer);
    if (error) throw new Error(error.message);

    if (data) {
      invoice.set({ ...$invoice, customer_id: data[0].id });
      console.log($invoice, data[0]);
      goto('/invoice/create');
    }
    return data;
  }

  onMount(async () => {
    title.set('Add Customer');
  });
</script>

<div class="flex w-full h-full items-center justify-center p-4">
  <div class="w-full  shadow rounded-xl bg-white p-4  ">
    <form on:submit|preventDefault={() => (submit = true)}>
      <div class="my-2">
        <div class="mb-2 font-bold">Name</div>
        <input type="text" bind:value={$customer.name} class={$ui.input} />
      </div>
      <div class="my-2">
        <div class="mb-2 font-bold">Email</div>
        <input type="text" bind:value={$customer.email} class={$ui.input} />
      </div>
      <div class="my-2">
        <div class="mb-2 font-bold">Phone</div>
        <input type="text" bind:value={$customer.phone} placeholder="+62XXX" class={$ui.input} />
      </div>
      <div class="my-2">
        <div class="mb-2 font-bold">Address</div>
        <textarea type="text" bind:value={$customer.address} class={$ui.input} />
      </div>
      <div class="my-2">
        <div class="mb-2 font-bold">Company name</div>
        <input
          type="text"
          bind:value={$customer.company_name}
          class={$ui.input}
        />
      </div>

      <div class="w-full flex justify-center items-center mt-4">
        <Button
          label="Add Customer"
          type="submit"
          value="Submit"
          on:click={() => (submit = false)}
        />
      </div>
    </form>
  </div>
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
