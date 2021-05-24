<script>
    import CategoryList from "../components/CategoryList.svelte";
    import AddCategory from "../components/AddCategory.svelte";
    import {navBar, mainBar, subTitle, title, updCat} from "../stores"
    import {onMount, getContext} from 'svelte';
    import Chart from 'svelte-frappe-charts';

    title.set("Metalfest");
    subTitle.set("Add/View Current Categories");
    navBar.set({
        bar: mainBar
    });

    let categoryData = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    }

    const metalfestService = getContext("MetalfestService");
    let categoryList;

    onMount(async () => {
        categoryList = await metalfestService.getCategories();
        categoryData.labels = [];
        categoryList.forEach((category, i) => {
            categoryData.labels.push(`${category.categoryName}`)
            categoryData.datasets[0].values[i] = category.categoryFestivals.length;
        })
    });

    function catJustAdded() {
        refreshCategories();
    }

    async function refreshCategories() {
        updCat.set({update: "Y"});
        categoryList = await metalfestService.getCategories();
        categoryData.labels = [];
        categoryList.forEach((category, i) => {
            categoryData.labels.push(`${category.categoryName}`)
            categoryData.datasets[0].values[i] = category.categoryFestivals.length;
        })
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
    <div class="uk-margin uk-width-1-1 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
        <p><strong>Number of Festivals by Category</strong></p>
        <Chart data={categoryData} type="bar" />
    </div>
</div>

