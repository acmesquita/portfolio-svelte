<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "../pages/Home.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/:user_name" let:params>
    <Home user_name={params.user_name} />
  </Route>
</Router>
