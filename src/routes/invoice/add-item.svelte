<script>
  import { goto } from '$app/navigation';
  import { invoice } from '../../store/invoiceStore';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { item, items } from '../../store/itemsStore';
  import { onMount } from 'svelte';
  import { title } from '../../store/storeSeesion';

  const handleAdd = () => {
    let number = $items;
    items.set([...number, $item]);
    // console.log($item, $items);
    item.set({ name: '', description: '', price: '', qty: '' });
    goto('/invoice/create');
  };

  onMount(async () => {
    title.set('Add Item');
  });
</script>

<div class="flex w-full h-full items-center justify-center p-4">
  <div class="w-full  shadow rounded-xl bg-white p-4  ">
    <div class="my-2">
      <div class="mb-2 font-bold">Name</div>
      <input type="text" bind:value={$item.name} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Description</div>
      <textarea type="text" bind:value={$item.description} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Price</div>
      <input type="number" bind:value={$item.price} class={$ui.input} />
    </div>
    <div class="my-2">
      <div class="mb-2 font-bold">Qty</div>
      <input type="number" bind:value={$item.qty} class={$ui.input} />
    </div>
    <div class="w-full flex justify-center items-center mt-4">
      <Button label="Add Item" on:click={handleAdd} />
    </div>
  </div>
</div>
<!-- <Button label="Back" on:click={handleBack} /> -->
