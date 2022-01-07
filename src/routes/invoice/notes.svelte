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
      <div class="mb-2 font-bold">Notes</div>
      <textarea bind:value={$invoice.notes} class={$ui.input} />
    </div>

    <div class="w-full flex justify-center items-center mt-4">
      <Button label="Back" on:click={handleBack} />
    </div>
  </div>
</div>
