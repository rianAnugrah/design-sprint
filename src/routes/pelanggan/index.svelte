<script>
import FloatingButton from "../../components/floatingButton.svelte";


function goToAddPage(){
    // window.location.href = "/pelanggan/add";
    alert('test')

}
</script>
<div>
ini halaman pelanggan

<FloatingButton on:click={goToAddPage}/>

</div>