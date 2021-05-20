<script>
    // import {onMount, getContext} from 'svelte';
    // const metalfestService = getContext("MetalfestService");

    // let categoryList;
    // onMount(async () => {
    //     categoryList = await metalfestService.getCategories();
    // });
    export let categoryList;
</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <thead>
        <th>Name</th>
        </thead>
        <tbody class="uk-text-left">
        {#if categoryList}
            {#each categoryList as category}
            <tr>
                <td>{category.categoryName}</td>
            </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>
