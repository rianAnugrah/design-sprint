<script>
  import { goto } from '$app/navigation';
  import { invoice } from '../../store/invoiceStore';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { onMount } from 'svelte';
  import { title } from '../../store/storeSeesion';

  const handleBack = () => {
    goto('/invoice/create');
  };

  onMount(async () => {
    title.set('Invoice Setting');
  });
</script>

<div class="flex w-full h-full items-center justify-center p-4">
  <div class="w-full  shadow rounded-xl bg-white p-4  ">
    <div class="my-2">
      <div class="mb-2 font-bold">Number</div>
      <input type="number" bind:value={$invoice.number} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Title</div>
      <input type="text" bind:value={$invoice.title} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Tax %</div>
      <input type="number" bind:value={$invoice.tax} class={$ui.input} />
    </div>
    <div class="my-2 ">
      <div class="mb-2 font-bold">Date</div>
      <input type="date" bind:value={$invoice.date} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Due date</div>
      <input type="date" bind:value={$invoice.due_date} class={$ui.input} />
    </div>
    <div class="w-full flex justify-center items-center mt-4">
      <Button label="Back" on:click={handleBack} />
    </div>
  </div>
</div>
