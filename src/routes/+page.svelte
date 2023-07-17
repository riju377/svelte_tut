<script>
  import { goto } from "$app/navigation";
  const handleClick = () => {
    goto("/product", { replaceState: true });
  };
</script>

<a href="/about">About</a>

<a href="/product">Product</a>
<button on:click={handleClick}>Submit</button>

<h1>Welcome home</h1>
