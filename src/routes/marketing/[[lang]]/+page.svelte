<script>
    import {page} from "$app/stores";
    const item = $page.params.lang;
    const language = new Map([
  ["en", 'Hi'],
  ["fr", 'Bonjur'],
  ["es", 'Hola']
]);
</script>

{#if !language.get(item)}
<h1>Select a valid language</h1>
{:else}
<h1>{language.get(item)}</h1>
{/if}