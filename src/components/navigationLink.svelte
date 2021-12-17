<script>
  import Icon from './Icon.svelte';

  export let to;
  export let label;
  export let iconName;
</script>

<a href={to}>
  <div class="flex flex-col items-center w-16 text-xs">
    <div>
      <Icon name={iconName} />
    </div>
    <div>{label}</div>
  </div>
</a>
