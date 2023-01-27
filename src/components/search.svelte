<script>
import Fuse from 'fuse.js'
export let searchList;

const options = {
	keys: ['frontmatter.name', 'frontmatter.project'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};

let data = searchList

let query =''

const fuse = new Fuse(data, options);

$: posts = fuse
    .search(query)
    .map((res) => res.frontmatter)
</script>

<div>
    <input class="" bind:value={query} />
    <br />
    <button class="" on:click={() => (query = "")}>Clear</button>

</div>

<style></style>