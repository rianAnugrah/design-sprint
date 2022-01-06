<script>
  import { goto } from '$app/navigation';
  import { ui } from '../../store/storeClass';
  import supabase from '$lib/db';

  import FloatingButton from '../../components/floatingButton.svelte';

  const handleAdd = () => {
    goto('/invoice/create');
  };

  import { onMount } from 'svelte';

  let invoices = [];

  onMount(async () => {
    const { data, error } = await supabase.from('invoice').select('*');
    if (error) throw new Error(error.message);
    invoices = data;
    console.log(invoices);
  });

  const handleClick = (invoice) => {
    goto(`/invoice/${invoice.id}`);
  };
</script>

<div class="block bg-white px-4 pb-4 shadow">
  <input type="text" class={$ui.input} placeholder="Search..." />
</div>
<div class="p-4">
  {#each invoices as invoice}
    <div
      on:click={() => handleClick(invoice)}
      class="border shadow rounded-xl p-2 w-full bg-white mb-4 cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <div class="text-gray-400">
          #{invoice.number}
        </div>
        <div class="text-gray-400">
          {invoice.date}
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-lg">
          {invoice.title}
        </div>
        <div class="text-blue-600  text-xl">
          USD {invoice.total}
        </div>
      </div>
    </div>
  {/each}
</div>
<FloatingButton on:click={handleAdd} />
