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
          <td class="text-xs font-bold p-1 px-2 ">${invoice.total}</td>
        </tr>
        <tr>
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Discount</td
          >
          <td class="text-xs font-bold p-1 px-2 ">${invoice.discount}</td>
        </tr>
        <tr>
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Vat</td
          >
          <td class="text-xs font-bold p-1 px-2 ">${invoice.vat}</td>
        </tr>
        <tr class="border-b border-gray-400">
          <td class="text-xs text-gray-400 font-bold p-1 px-2 " colspan="3"
            >Tax</td
          >
          <td class="text-xs font-bold p-1 px-2 "
            >${(invoice.tax / 100) * invoice.total}</td
          >
        </tr>
        <tr>
          <td class="text-xs text-red-600 font-bold p-4 px-2 " colspan="3"
            >GRAND TOTAL</td
          >
          <td class="text-xs font-bold p-1 px-2 ">${invoice.grand_total}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between items-center bg-white rounded-md p-4 mt-4">
      <div class="flex flex-col">
        <div class="text-gray-400">Pay with</div>
        <div>Paypal</div>
      </div>
      <div>
        <svg
          width="72"
          height="40"
          viewBox="0 0 72 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0H66C69.3137 0 72 2.68629 72 6V34C72 37.3137 69.3137 40 66 40H6C2.68629 40 0 37.3137 0 34V6Z"
            fill="#CCECFF"
          />
          <path
            d="M42.4009 15.0267C42.4009 15.1337 42.4009 15.2406 42.2939 15.3476C41.4383 19.6257 38.6576 21.0161 35.0212 21.0161H33.203C32.7752 21.0161 32.3474 21.3369 32.3474 21.7647L31.3848 27.7541L31.1709 29.4653C31.1709 29.7862 31.3848 30.0001 31.5987 30.0001H34.9142C35.342 30.0001 35.6629 29.6792 35.6629 29.3583V29.1444L36.3046 25.2942V25.0803C36.4116 24.6524 36.7324 24.4385 37.0533 24.4385H37.588C40.7966 24.4385 43.2565 23.1551 43.8982 19.4118C44.2191 17.8075 44.0052 16.5241 43.2565 15.6684C43.0426 15.4545 42.7218 15.2406 42.4009 15.0267Z"
            fill="#2199D6"
          />
          <path
            d="M41.5455 14.7059C41.4386 14.7059 41.3317 14.5989 41.1177 14.5989C41.0108 14.5989 40.7969 14.492 40.6899 14.492C40.1552 14.385 39.6204 14.385 39.0856 14.385H34.1658C34.0589 14.385 33.9519 14.385 33.845 14.492C33.6311 14.5989 33.4172 14.8128 33.4172 15.0267L32.3477 21.6578V21.8717C32.4546 21.4439 32.7755 21.123 33.2033 21.123H35.0215C38.6578 21.123 41.4386 19.6257 42.2942 15.4545C42.2942 15.3476 42.2942 15.2406 42.4012 15.1337C42.1873 15.0267 41.9734 14.9198 41.7595 14.8128C41.6525 14.7059 41.5455 14.7059 41.5455 14.7059Z"
            fill="#252C5E"
          />
          <path
            d="M33.4171 15.0268C33.4171 14.8129 33.631 14.5989 33.8449 14.492C33.9519 14.492 34.0589 14.385 34.1658 14.385H39.0856C39.6204 14.385 40.2621 14.385 40.6899 14.492C40.7968 14.492 41.0108 14.492 41.1177 14.5989C41.2247 14.5989 41.3316 14.7059 41.5455 14.7059C41.6525 14.7059 41.6525 14.7059 41.7594 14.8129C41.9733 14.9198 42.1872 15.0268 42.4011 15.1337C42.615 13.5294 42.4011 12.4599 41.5455 11.4973C40.5829 10.4278 38.8717 10 36.7327 10H30.4225C29.9947 10 29.5668 10.3209 29.5668 10.7487L27 27.2193C27 27.5402 27.2139 27.861 27.5348 27.861H31.385L32.3476 21.6578L33.4171 15.0268Z"
            fill="#263577"
          />
        </svg>
      </div>
    </div>
  </div>
{/if}
