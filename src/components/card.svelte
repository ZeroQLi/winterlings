<script>
    import '../styles/main.css'

    export let Name, Author, Summary, Link;
</script>

<div class="card hover:scale-125 transition ease-in-out">
    <a href={Link}>
    <h1 class=" text-4xl font-bold">{Name}</h1>
    <h1 class=" text-3xl font-italics ">{Author}</h1>
    {#if Summary}
        <p>{Summary}</p>
    {/if}
    </a>
</div>

<style>

</style>