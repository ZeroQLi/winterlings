<script>
import Fuzzy from "svelte-fuzzy";
import Card from "./card.svelte";
export let searchlist;

let data = searchlist;
console.log(data);
let query = "";
const options = {
	keys: ['frontmatter.project'],
};
let formatted = [];
$: console.log(formatted);

</script>

<input bind:value={query} />
<br />
<button on:click={() => (query = "")}>Clear</button>
<Fuzzy {query} {data} {options} bind:formatted />

<style></style>