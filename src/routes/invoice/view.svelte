<script>
  import { page } from '$app/stores';

  import supabase from '$lib/db';

  let loading = true;
  let invoice;
  let customer;
  const id = $page.query.get('view');

  async function getInvoice() {
    try {
      loading = true;

      let { data, error, status } = await supabase
        .from('invoice')
        .select(`*`)
        .eq('id', id)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        console.log(data);
        // username = data.username;
        // website = data.website;
        // avatar_url = data.avatar_url;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      loading = false;
    }
  }
</script>

<form use:getInvoice>
  <div>TEst</div>
</form>
