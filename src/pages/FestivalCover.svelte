<script>
    import FestivalList from "../components/FestivalList.svelte";
    import {navBar, mainBar, subTitle, title, updCat} from "../stores";
    import AddFestival from "../components/AddFestival.svelte";

    title.set("Metalfest");
    subTitle.set("All Current Festivals");
    navBar.set({
        bar: mainBar
    });

    import {onMount, getContext} from 'svelte';
    const metalfestService = getContext("MetalfestService");

    let festivalList;
    onMount(async () => {
        festivalList = await metalfestService.getFestivals();
    });

    function festJustAdded() {
        refreshFests();
        updCat.set({update: "Y"});
    }

    async function refreshFests() {
        festivalList = await metalfestService.getFestivals();
    }
</script>

<div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center uk-grid">
    <div class="uk-width-expand@m">
        <FestivalList {festivalList}/>
    </div>
    <div class="uk-width-expand@m">
        <AddFestival {festJustAdded}/>
    </div>
</div>

