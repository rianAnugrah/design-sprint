<script>

    export let title = "No data";
    export let action ;
</script>

<div>
    <div>
        {title}
    </div>
    <div><slot /></div>
    <div>{@html action}</div>
</div>