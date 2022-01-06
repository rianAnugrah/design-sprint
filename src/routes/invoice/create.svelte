<script>
  import { invoice } from '../../store/invoiceStore';

  import Section from '../../components/section.svelte';
  import { customer } from '../../store/customerStore';
  import { item, items } from '../../store/itemsStore';
  import Button from '../../components/button.svelte';
  import { goto } from '$app/navigation';

  const handleChangeInvoice = () => {
    goto('/invoice/change');
  };

  const handleChangeCustomer = () => {
    goto('/invoice/customer');
  };

  const handleAddItem = () => {
    goto('/invoice/add-item');
  };

  const handlePreview = () => {
    // invoice.set({...$invoice , created_by : $user.})
    goto('/invoice/preview');
  };

  let total = 0;

  for (let index = 0; index < $items.length; index++) {
    total = total + $items[index].price * $items[index].qty;
  }
</script>

<div>
  <Section label="Create New Invoice">
    <div>Invoice # {$invoice.number}</div>

    <div>Due on {$invoice.due_date}</div>
    <div>{$invoice.date}</div>
    <Button label="Change" icon="cash" on:click={handleChangeInvoice} />
  </Section>
  <Section label="Customer">
    {#if $customer.name}
      <div>{$customer.name}</div>
      <Button label="Change" icon="plus" on:click={handleChangeCustomer} />
    {:else}
      <Button
        label="Add Customer"
        icon="plus"
        on:click={handleChangeCustomer}
      />
    {/if}
  </Section>
  <Section label="Items">
    {#if $items.length > 0}
      {#each $items as item}
        <div>
          {item.name} | USD {item.price} | {item.qty} | Subtotal : USD {item.price *
            item.qty}
        </div>
      {/each}
      <Button label="Add Item" icon="plus" on:click={handleAddItem} />
    {:else}
      <Button label="Add Item" icon="plus" on:click={handleAddItem} />
    {/if}
  </Section>
  <Section label="Total">USD {total}</Section>
  <Section label="Amount Due">Amount Due</Section>
  <Section label="Note">Note</Section>
  <Button label="Next" on:click={handlePreview} />


</div>
