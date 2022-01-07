<script>
  import { title } from '../store/storeSeesion';

  import { ui } from '../store/storeClass';
  import Icon from './Icon.svelte';
</script>

<div class="w-full m-0 p-0 flex justify-between items-center bg-white">
  <div class="font-bold text-xl text-left p-4">{$title}</div>
</div>
