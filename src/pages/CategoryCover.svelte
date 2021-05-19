<script>
    import CategoryList from "../components/CategoryList.svelte";
    import AddCategory from "../components/AddCategory.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Metalfest");
    subTitle.set("Add/View Current Categories");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-1-2@m">
            <CategoryList />
        </div>
        <div class="uk-width-1-2@m">
            <AddCategory />
        </div>
    </div>
</div>

