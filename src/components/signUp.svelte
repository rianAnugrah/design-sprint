<script>
  import { goto } from '$app/navigation';

  import supabase from '$lib/db';
  import { ui } from '../store/storeClass';

  let loading = false;
  let email = 'tester@theravenry.com';
  let password = 'tester12345678';

  const handleRegister = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert('Login Success');
      goto('/invoice');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
  <div class="col-6 form-widget">
    <h1 class="header">Solos</h1>
    <p class="description">Sign in with your email and password</p>
    <div>
      <input
        class={$ui.input + ' mb-2 border-red-500 border'}
        type="email"
        placeholder="Your email"
        bind:value={email}
      />
      <input
        class={$ui.input + ' mb-2 border-red-500 border'}
        type="password"
        placeholder="Your password"
        bind:value={password}
      />
    </div>
    <div>
      <input
        type="submit"
        class="button block"
        value={loading ? 'Loading' : 'Login'}
        disabled={loading}
      />
    </div>
  </div>
</form>
