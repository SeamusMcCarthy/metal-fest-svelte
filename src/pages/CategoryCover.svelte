<script>
    import CategoryList from "../components/CategoryList.svelte";
    import AddCategory from "../components/AddCategory.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"
    // import {onMount} from "svelte";

    title.set("Metalfest");
    subTitle.set("Add/View Current Categories");
    navBar.set({
        bar: mainBar
    });

    import {onMount, getContext} from 'svelte';
    const metalfestService = getContext("MetalfestService");
    let categoryList;
    onMount(async () => {
        categoryList = await metalfestService.getCategories();
    });

    function catJustAdded() {
        refreshCategories();
    }

    async function refreshCategories() {
        categoryList = await metalfestService.getCategories();
    }
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-1-2@m">
            <CategoryList {categoryList}/>
        </div>
        <div class="uk-width-1-2@m">
            <AddCategory {catJustAdded}/>
        </div>
    </div>
</div>

