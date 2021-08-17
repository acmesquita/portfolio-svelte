<script lang="ts">
  import type { User } from "../interfaces/user";

  export let user: User;
</script>

<section class="section">
  <p>{user?.bio || ""}</p>
</section>

<style>
  .section > p {
    font-size: 1rem;
  }
</style>
