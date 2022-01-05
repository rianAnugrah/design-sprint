<script>
  import { ui } from '../store/storeClass';
import Icon from './Icon.svelte';
</script>

<div class="w-full m-0 p-0 flex justify-between items-center">
    
    <input type="text" placeholder="Cari..." class={$ui.input} />

  <div class="pl-4">
    <Icon name="bell" />
</div>
<div class="pl-4">
    <Icon name="menu" />
</div>
</div>
