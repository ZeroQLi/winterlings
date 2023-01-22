<script>
    import '../styles/main.css'

    export let Name, Author, Link;
    Link = '/p/'+Link
</script>

<div class="card hover:scale-125 transition ease-in-out">
    <a href={Link}>
    <h1 class=" text-4xl font-bold pb-2">{Name}</h1>
    {#if Array.isArray(Author)}
        {#each Author as auth}
        <a class=" hover:text-pink-700 transition ease-in-out" href={'https://github.com/'+auth.slice(1)}>
            <h1 class=" inline md:text-3xl text-1xl font-italics">{auth} </h1></a>
        {/each}
    {:else}
        <a class="overflow-auto hover:text-red-700 transition ease-in-out" href={'https://github.com/'+Author.slice(1)}>
            <h1 class=" md:text-3xl text-1xl font-italics ">{Author}</h1></a>
    {/if}

    </a>
</div>

<style>

</style>