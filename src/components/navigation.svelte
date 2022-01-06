<script>
  import NavigationLink from './navigationLink.svelte';
</script>

<div class="w-full fixed  bottom-2 px-2">
  <div class="flex p-2 bg-white justify-around shadow w-full rounded-md">
    <NavigationLink to="/" label="Home" iconName="home" />
    <NavigationLink to="/invoice" label="Invoice" iconName="cash" />
    <NavigationLink to="/customer" label="Customer" iconName="users" />
    <!-- <NavigationLink to="/payment" label="Payments" iconName="cash" /> --> 
    <NavigationLink to="/profile" label="Profile" iconName="user" />
  </div>
</div>