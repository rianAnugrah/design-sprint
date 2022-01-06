<script>
  import { goto } from '$app/navigation';
  import { invoice } from '../../store/invoiceStore';
  import Button from '../../components/button.svelte';
  import { ui } from '../../store/storeClass';
  import { item, items } from '../../store/itemsStore';

  const handleAdd = () => {
    let number = $items;
    items.set([...number, $item]);
    // console.log($item, $items);
    item.set({ name: '', description: '', price: '', qty: '' });
    goto('/invoice/create');
  };
  const handleBack = () => {
    goto('/invoice/create');
  };
</script>

<label>Name</label>
<input type="text" bind:value={$item.name} class={$ui.input} />

<label>Description</label>
<textarea type="text" bind:value={$item.description} class={$ui.input} />

<label>Price</label>
<input type="number" bind:value={$item.price} class={$ui.input} />

<label>Qty</label>
<input type="number" bind:value={$item.qty} class={$ui.input} />

<Button label="Add" on:click={handleAdd} />
<Button label="Back" on:click={handleBack} />
