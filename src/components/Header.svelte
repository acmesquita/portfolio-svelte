<script lang="ts">
  import type { User } from "../interfaces/user";

  export let user: User;
</script>

<header class="header">
  <img src={user?.avatar_url} alt={""} />
  <div class="container">
    <h1>{user?.name}</h1>
    <p>{user?.bio || ""}</p>
    <div class="followers">
      <p><strong>Seguidores:</strong>{user?.followers}</p>
      <p><strong>Seguindo:</strong>{user?.following}</p>
      <p><strong>Empresa:</strong>{user?.company}</p>
    </div>
    <div class="followers">
      <p>
        <strong>GitHub:</strong><a href={user?.html_url} target="_blank"
          >@{user?.login}</a
        >
      </p>
      <p>
        <strong>No GitHub desde:</strong>{new Date(
          user?.created_at
        ).toLocaleDateString("pt-BR")}
      </p>
    </div>
  </div>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .container {
    padding: 0.5rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  .followers {
    display: flex;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #545454;
  }

  p > strong {
    color: #555;
    margin-right: 5px;
  }
</style>
