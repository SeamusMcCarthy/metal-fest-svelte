<script>
    import {onMount, getContext} from 'svelte';
    import {updCat} from "../stores";
    const metalfestService = getContext("MetalfestService");
    let categories = [];

    onMount(async () => {
        categories = await metalfestService.getCategories();
    });

    async function refreshCat() {
        categories = await metalfestService.getCategories();
    }

    $: {
        console.log("Refresh categories " + $updCat.update);
        refreshCat();
        updCat.set({update: "N"});
    }
</script>

    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true;">
        <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close />
            <div class="uk-width-1-2@s uk-width-2-5@m">
                <ul class="uk-nav uk-nav-default">
                    {#if categories}
                        {#each categories as category}
                            <li class="uk-nav-header">{category.categoryName}</li>
                            <li class="uk-nav-divider"></li>
                            {#if category.categoryFestivals}
                                {#each category.categoryFestivals as fest}
                                <li><a href="#/fest-dtls/{fest._id}">{fest.name}</a></li>
                                {/each}
                            {/if}
                        {/each}
                    {/if}
                </ul>
            </div>
        </div>
    </div>

