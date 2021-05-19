<script>
    import FestivalList from "../components/FestivalList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores";
    import AddFestival from "../components/AddFestival.svelte";

    title.set("Metalfest");
    subTitle.set("All Current Festivals");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center uk-grid">
    <div class="uk-width-expand@m">
        <FestivalList />
    </div>
    <div class="uk-width-expand@m">
        <AddFestival />
    </div>
</div>

