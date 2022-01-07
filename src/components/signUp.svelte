<script>
  import { goto } from '$app/navigation';

  import supabase from '$lib/db';
  import { ui } from '../store/storeClass';
  import Button from './button.svelte';

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

<form
  class="row flex flex-center items-center justify-center h-screen w-screen p-6"
  on:submit|preventDefault={handleLogin}
>
  <div class="col-6 form-widget flex items-center flex-col">
    <h1 class="text-3xl font-bold ">Solos</h1>
    <p class="py-6">Sign in with your email and password</p>
    <div>
      <span class="my-2">Email</span>
      <input
        class={$ui.input + ' mb-2 '}
        type="email"
        placeholder="Your email"
        bind:value={email}
      />
      <span class="my-2">Password</span>

      <input
        class={$ui.input + ' mb-2 '}
        type="password"
        placeholder="Your password"
        bind:value={password}
      />
    </div>
    <div class="py-6">
      <Button
        label="Login"
        type="submit"
        class="button block"
        value={loading ? 'Loading' : 'Login'}
        disabled={loading}
      />
    </div>
  </div>
</form>
