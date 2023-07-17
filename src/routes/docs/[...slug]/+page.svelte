<script>
    import {page} from "$app/stores";
    const slugArr = $page.params.slug.split('/');
</script>

{#if slugArr.length === 1}
<h1>You are viewing docs for {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>You are viewing docs for {slugArr[0]} and relating {slugArr[1]}</h1>
{:else}
<h1>You are viewing docs for {slugArr[0]} and relating {slugArr[1]} and reference to {slugArr.slice(2,slugArr.length)}</h1>
{/if}