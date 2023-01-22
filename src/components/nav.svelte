<script>
import '../styles/hc.css'

export let name, page;
let names = ['1mPink', 'AEZ314', 'AHussein04', 'AashutoshR2062', 'Aiyush-G', 'Amagtoto', 'AnishT500', 'Arpan-206', 'Bhoomi-2115', 'Bowiten', 'ByteAtATime', 'Carsblox', 'CodeLongAndProsper90', 'CodingForAddicts', 'Cohen-Koen', 'CoolCoderSJ', 'Cooper7196', 'DevIos01', 'Dhruv561', 'Divya-2009', 'Erik-Dennis', 'GalaxyGamingBoy', 'Gam3rrXD', 'Gaurav-Ban22', 'Gregor-Davies', 'HarjotSuiingh', 'InformationAntti', 'InternetRamen', 'Jackson-Turner', 'JeffreyWangDev', 'KaiDevrim', 'Kevin-Liu-01', 'KianTheCon', 'KoKoOogit', 'KrauseOlly', 'KrishnaSharma206', 'LinusSkucas', 'LiricTech', 'LucasHT22', 'LuizWeitz', 'MagiDarkPro', 'MangoTornado', 'ManikShrivastav', 'MattWang05', 'Michaell14', 'Neesh774', 'NoahSaxophone', 'Noahk2024', 'Omay238', 'ParthAgarwal', 'PasinduDushan', 'Puffball101961', 'RhysMP', 'RileyCz', 'Roh101', 'Roizor', 'SATOMASAHIRO2005', 'SK-2009', 'SamDev-7', 'Scott170c', 'Screen-sLaYeR', 'Shourya-maker-lab', 'Shrey-Mehra', 'Spartoons', 'StevenJohnson12', 'SuperBoyne', 'Tanishqupmanu', 'TechTurtel', 'ThanatosXingYu', 'TheScientist101', 'Troupemaster313', 'Val171', 'VelocityDesign', 'Verisimilitude11', 'WilmervH', 'YashasSingh', 'YodaLightsabr', 'ZeroQLi', 'abhayypatel', 'adewinmbi', 'ady00', 'akshay', 'aleung18', 'alialiwa2005', 'amishasao', 'anddddrew', 'andriy-malyshchak', 'andy-phung', 'ap-1', 'arielTROY', 'arsalaan-alam', 'ayan-biswas0412', 'bikash159', 'blaine-t', 'bloggingKIng', 'boyuan12', 'briannamagtoto', 'briyandyju09', 'bykevinyang', 'camdan-me', 'cfanoulis', 'chrisrama', 'citricacid2', 'covertimpala', 'cytronicoder', 'darksidemanas', 'davidarogunre', 'de-monish', 'devramsean0', 'edmundlzen', 'ethanc7', 'euphorichubbbb', 'ex4722', 'exu3', 'galadrielmccrea', 'gamer-1478', 'geschmit', 'griffinli', 'haitomns4173', 'happiestbee', 'hard-shutdown', 'imdigitalashish', 'ivoinestrachan', 'jmuku', 'kaiz715', 'khrj', 'l3gacyb3ta', 'limeskey', 'linkai101', 'luanderfarias', 'lucaspotter', 'maggie-j-liu', 'magsnake', 'masonnamminga', 'mattkrnwn', 'maxdrapa', 'mostlywhat', 'parathb', 'paulsam06', 'peiprjs', 'rbccawang', 'rcyaon', 'recursiveforte', 'revaga', 'sahitid', 'samarth641', 'sebrod06', 'sheepy3', 'shojha24', 'skumm00', 'smwwims', 'sofiykam', 'sohamb117', 'stati30241', 'thaddeuskkr', 'thekyleliao', 'thelouisgan', 'thinkingjet', 'thomaswcy', 'tinuh', 'tregsthedev', 'ultratrikx', 'vitaliikuzhdin', 'wardecs', 'winstoniskandar', 'xingyujie', 'yutarour']

let right = '/p/'+ names[names.indexOf(page)+1]
let left = '/p/'+ names[names.indexOf(page)-1]

var credentials = btoa(import.meta.env.PUBLIC_USER+':'+import.meta.env.PUBLIC_TOKEN);
var auth = { "Authorization" : `Basic ${credentials}` };

let promise = fetch('https://api.github.com/users/'+(Array.isArray(name) ? name[0].slice(1) : name.slice(1)), { headers : auth }).then((x) => x.json());

</script>
<nav class="">
    <div class="flex justify-evenly p-4 bg-[#3c4858] w-full">
        <a href="/" class="absolute left-4">
        <img class="object-cover h-14" alt="winter wonderland logo" src="/winter.png">
        </a>
        <a href={left} class=" lg:block hidden hover:scale-125 transition ease-in-out text-white "> <button class="lg text-3xl"> &leftleftarrows; {left}</button> </a>
        <a href={left} class=" lg:hidden  hover:scale-125 transition ease-in-out text-white "> <button class="lg text-2xl"> previous </button> </a>

        <a href={'https://github.com/'+(Array.isArray(name) ? name[0].slice(1) : name.slice(1))}> 
            <h1 class=" text-5xl hover:scale-125 transition ease-in-out text-white">@{page}</h1></a>

        <a href={right} class=" lg:block hidden hover:scale-125 transition ease-in-out text-white "> <button class="lg text-3xl">{right} &rightrightarrows;</button> </a> 
        <a href={left} class=" lg:hidden  hover:scale-125 transition ease-in-out text-white "> <button class="lg text-2xl"> next </button> </a>
    </div>
     
    <div class=" text-teal-200 flex justify-evenly bg-slate-500 p-2">
        {#await promise} 
                    <h1>loading</h1>
            {:then data}
                <h2 class="lg:text-3xl">Location: {data.location}</h2>
            {:catch error}
	            <p>An error occurred!</p>
            {/await}
        {#if Array.isArray(name)}
            <h3 class=" lg:text-3xl text-slate-100">members: </h3>
            {#each name as git}
                <a href={'https://github.com/'+git.slice(1)}>
                <h3 class=" lg:text-3xl hover:scale-125 transition ease-in-out text-white ">{git}</h3></a>
            {/each}
        {/if}
    </div>
</nav>