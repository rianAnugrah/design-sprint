<script>
  import { invoice } from '../../store/invoiceStore';

  import Section from '../../components/section.svelte';
  import { customer } from '../../store/customerStore';
  import { items } from '../../store/itemsStore';
  import Button from '../../components/button.svelte';
  import { goto } from '$app/navigation';

  const handleChangeInvoice = () => {
    goto('/invoice/change');
  };
</script>

<div>
  <Section label="Create New Invoice">
    <div>Invoice #{$invoice.number}</div>

    <div>Due on {$invoice.due_date}</div>
    <div>{$invoice.date}</div>
    <Button label="Change" icon="cash" on:click={handleChangeInvoice} />
  </Section>
  <Section label="Customer">
    {#if $customer.name}
      <div>{$customer.name}</div>
    {:else}
      Add Customer
    {/if}
  </Section>
  <Section label="Items">
    {#if $items.length > 0}
      <!-- <div>{$items}</div> -->
    {:else}
      Add Items
    {/if}
  </Section>
  <Section label="Total">Total</Section>
  <Section label="Amount Due">Amount Due</Section>
  <Section label="Note">Note</Section>
</div>
