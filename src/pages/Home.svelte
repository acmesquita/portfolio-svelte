<script lang="ts">
  import Bio from "../components/Bio.svelte";
  import Header from "../components/Header.svelte";
  import Repositories from "../components/Repositories.svelte";
  import type { User } from "../interfaces/user";
  import { api, reposUrl } from "../services/api";

  export let user_name: string = "acmesquita";

  let user: User;
  api.get(`/${user_name}`).then((response) => {
    user = response.data;
  });
</script>

<main class="main">
  {#if user}
    <Header {user} />
    <Bio {user} />
    <Repositories repos_url={reposUrl(user.login)} />
  {/if}
</main>

<style>
  .main {
    margin: 5rem auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
</style>
