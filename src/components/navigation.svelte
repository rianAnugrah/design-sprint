<script>
  import NavigationLink from './navigationLink.svelte';
</script>

<div class="w-full fixed  bottom-2 px-2">
  <div class="flex p-2 bg-white justify-around shadow w-full rounded-md">
    <NavigationLink to="/" label="Home" iconName="home" />
    <NavigationLink to="/tagihan" label="Tagihan" iconName="cash"/>
    <NavigationLink to="/pelanggan" label="Pelanggan" iconName="users"/>
    <NavigationLink to="/kolektor" label="Kolektor" iconName="collection"/>
    <NavigationLink to="/layanan" label="Layanan" iconName="service"/>
    <NavigationLink to="/setting" label="Pengaturan" iconName="setting"/>
  </div>
</div>
