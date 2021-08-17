<script lang="ts">
  import axios from "axios";
  import type { Repo } from "../interfaces/repo";
  import Repository from "./Repository.svelte";

  export let repos_url: string;
  let repos: Repo[] = [];

  axios.get(repos_url).then((response) => {
    repos = response.data;
  });
</script>

<section class="repos">
  <h3>Repositórios principais</h3>
  <ul>
    {#each repos as repo}
      <li><Repository {repo} /></li>
    {/each}
  </ul>
</section>

<style>
  .repos {
    width: 600px;
  }
  .repos h3 {
    font-size: 1rem;
    margin: 12px auto;
  }
  .repos > ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
  .repos > ul > li {
    width: 275px;
  }
</style>
