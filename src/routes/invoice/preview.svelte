<script>
  import supabase from '$lib/db';
  import Button from '../../components/button.svelte';
  import { title, user } from '../../store/storeSeesion';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { each } from 'svelte/internal';

  let loading = true;
  let invoice;
  const id = $page.query.get('id');

  async function getInvoice() {
    try {
      loading = true;

      let { data, error, status } = await supabase
        .from('invoice')
        .select(`*,customer(*)`)
        .eq('id', id)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        console.log(data, $page);
        invoice = data;
        // username = data.username;
        // website = data.website;
        // avatar_url = data.avatar_url;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    getInvoice();
    title.set('Preview Invoice');
  });
</script>

{#if invoice}
  <div
    class="flex justify-between items-end bg-white px-4 pb-4 shadow cursor-pointer"
  >
    {invoice.date}
  </div>
  <div class="p-4">
    <div class="flex flex-col bg-white rounded-md p-4 mb-4">
      <div class="text-gray-400">INFO</div>
      <div>Invoice#{invoice.number}</div>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 mb-4">
      <div class="text-gray-400">TO</div>
      <div>{invoice.customer.name}</div>
      <div>{invoice.customer.address}</div>
      <div class="text-gray-400">{invoice.customer.email}</div>
      <div class="text-gray-400">{invoice.customer.phone}</div>
    </div>
    <table class="bg-white rounded-md w-full">
      <thead>
        <tr class="border-b border-gray-400">
          <td class="text-xs text-gray-400 p-2 py-4">DESCRIPTION</td>
          <td class="text-xs text-gray-400 p-2 py-4">RATE</td>
          <td class="text-xs text-gray-400 p-2 py-4">QTY</td>
          <td class="text-xs text-gray-400 p-2 py-4">SUBTOTAL</td>
        </tr>
      </thead>
      <tbody>
        {#each invoice.items as item}
          <tr>
            <td class="text-xs font-bold p-2 py-4">{item.description}</td>
            <td class="text-xs font-bold p-2 py-4">${item.price}</td>
            <td class="text-xs font-bold p-2 py-4">{item.qty}</td>
            <td class="text-xs font-bold p-2 py-4">${item.price * item.qty}</td>
          </tr>
        {/each}
        <tr class="border-t border-gray-400">
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Subtotal</td
          >
          <td class="text-xs font-bold p-1 px-2 ">$0</td>
        </tr>
        <tr>
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Discount</td
          >
          <td class="text-xs font-bold p-1 px-2 ">$0</td>
        </tr>
        <tr>
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Vat</td
          >
          <td class="text-xs font-bold p-1 px-2 ">$0</td>
        </tr>
        <tr class="border-b border-gray-400">
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Tax</td
          >
          <td class="text-xs font-bold p-1 px-2 ">$0</td>
        </tr>
        <tr>
          <td class="text-xs text-red-600 font-bold p-4 px-2 " colspan="3"
            >GRAND TOTAL</td
          >
          <td class="text-xs font-bold p-1 px-2 ">$0</td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-col bg-white rounded-md p-4 mt-4">
      <div class="text-gray-400">Pay with</div>
      <div>Paypal</div>
    </div>
  </div>

  <div
    class="w-full fixed  fixed bottom-0 left-0 h-20 px-4 bg-white flex items-end justify-end p-4"
  >
    <!-- <Button label="Create" on:click={handlePreview} /> -->
    <a
      href={`https://api.whatsapp.com/send?phone=${invoice.customer.phone}&text=https://${$page.host}/invoice/view?id=${invoice.id}`}
      label="Share"
      type="submit"
      class="bg-blue-600 shadow rounded-full justify-center h-[50px] text-center w-[150px] p-2 flex items-center text-white"
      value="Submit"><div>Share</div></a
    >
  </div>
{/if}
