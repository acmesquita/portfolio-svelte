<script lang="ts">
  import type { Repo } from "../interfaces/repo";

  export let repo: Repo;
</script>

<div class="repo">
  <a href={repo?.link}>{repo?.repo}</a>
  <p>
    <small
      >{repo?.language || "Gist"} - Forks: {repo?.forks} - Stars: {repo?.stars}</small
    >
  </p>
  <p>{repo?.description || ""}</p>
</div>

<style>
  .repo {
    border: 1px solid gray;
    padding: 8px;
    border-radius: 4px;
    word-wrap: break-word;
    height: 150px;
  }
  .repo a,
  .repo p {
    font-size: 1rem;
    margin: 5px 0;
  }

  .repo small {
    font-size: 0.75rem;
  }
</style>
