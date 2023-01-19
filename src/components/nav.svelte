<script>
import '../styles/hc.css'

export let name,page;
let names = ['1mPink', 'AEZ314', 'AashutoshR2062', 'Aiyush-G', 'AnishT500', 'Arpan-206', 'Bhoomi-2115', 'Bowiten', 'ByteAtATime', 'CamTheHelpDesk', 'Carsblox', 'CodeLongAndProsper90', 'CodingForAddicts', 'Cohen-Koen', 'CoolCoderSJ', 'Cooper7196', 'DevIos01&Kiana', 'Dhruv561', 'Divya-2009', 'Erik-Dennis', 'GalaxyGamingBoy', 'Gam3rrXD', 'Gregor-Davies', 'HarjotSuiingh', 'InformationAntti', 'InternetRamen', 'Jackson-Turner', 'JeffreyWangDev', 'KaiDevrim', 'Kevin-Liu-01', 'KoKoOogit', 'KrauseOlly', 'KrishnaSharma206', 'LinusSkucas', 'LiricTech', 'LucasHT22', 'LuizWeitz', 'MagiDarkPro2', 'MangoTornado', 'ManikShrivastav', 'Michaell14', 'Neesh774', 'NoahSaxophone', 'Noahk2024', 'Omay238', 'ParthAgarwal', 'PasinduDushan', 'Puffball101961', 'RhysMP', 'RileyCz', 'Roizor', 'SATOMASAHIRO2005', 'SK-2009', 'SamDev-7', 'Scott170c', 'Screen-sLaYeR', 'Shawn Malluwa', 'Shrey-Mehra', 'StevenJohnson12', 'SuperBoyne', 'TechTurtel', 'Troupmaster313', 'Val171', 'VelocityDesign', 'Verisimilitude11', 'WilmervH', 'abhayypatel', 'adewinmbi', 'ady00', 'aleung18', 'alialiwa2005', 'amishasao', 'andrewnijmeh', 'andriy-malyshchak', 'andy-phung', 'ap-1', 'arielTROY', 'arsalaan-alam', 'ayan-biswas0412', 'bikash159', 'blaine-t', 'bloggingKIng', 'boyuan12', 'briyandyju09', 'bykevinyang', 'cfanoulis', 'citricacid2', 'covertimpala', 'davidarogunre', 'de-monish', 'devramsean0', 'edmundlzen', 'ethanc7', 'euphorichubbbb', 'exu3', 'galadrielmccrea', 'gamer-1478', 'geschmit', 'haitomns4173', 'happiestbee', 'hard-shutdown', 'imdigitalashish', 'ivoinestrachan', 'jmuku', 'khrj', 'l3gacyb3ta', 'limeskey', 'linkai101', 'lucaspotter', 'maggie-j-liu', 'magsnake', 'masonnamminga', 'mattkrnwn', 'maxdrapa', 'mostlywhat', 'parathb&DavDivbizziz', 'paulsam06', 'peiprjs', 'rbccawang', 'rcyaon', 'recursiveforte', 'revaga', 'sahitid', 'samarth641', 'skumm00', 'smwwims', 'sofiykam', 'sohamb117', 'stati30241', 'thaddeuskkr', 'thekyleliao', 'thelouisgan', 'thinkingjet', 'tinuh', 'ultratrikx', 'vitaliikuzhdin', 'wardecs', 'winstoniskandar&mayuridev', 'yutarour']

let right = '/p/'+ names[names.indexOf(page)+1]
let left = '/p/'+ names[names.indexOf(page)-1]
console.log(page);
console.log(names.indexOf(page));
console.log(name);

if (Array.isArray(name)){

}
else{

}
</script>
<nav class="">
    <div class="flex justify-evenly p-4 bg-[#3c4858] w-full">
        <a href="/" class="absolute left-4 text-5xl">
        <img class="object-cover h-14 " alt="winter wonderland logo" src="/winter.png">
        </a>
        <a href={left} class=" hover:scale-125 transition ease-in-out text-white "> <button class=" text-5xl lg "> &leftleftarrows; {left}</button> </a>
        <h1 class=" hover:scale-125 transition text-5xl ease-in-out text-white ">{page}</h1>
        <a href={right} class=" hover:scale-125 transition ease-in-out text-white "> <button class=" text-5xl lg">{right} &rightrightarrows;</button> </a> 
    </div>
     
    <div class=" flex justify-evenly bg-slate-500 p-2">
        {#if Array.isArray(name)}
            <h2 class="text-slate-100"> team project: </h2>
            {#each name as git}
                <a href='https://github.com/{git.slice(1)}'>
                <h2 class=" hover:scale-125 transition text-1xl ease-in-out text-white ">{git}</h2></a>
            {/each}
        {/if}
    </div>
</nav>