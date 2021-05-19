<script>
    import {onMount, getContext} from 'svelte';
    const metalfestService = getContext("MetalfestService");

    let festivalList;
    onMount(async () => {
        festivalList = await metalfestService.getFestivals();
    });
</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large uk-animation-scale-up">
    <table id="fest-table" class="uk-table">
        <caption>
            Festival List
        </caption>
        <thead>
            <th>Name</th>
            <th>Description</th>
            <th>City</th>
            <th>Country</th>
            <th>Details</th>
        </thead>
        <tbody class="uk-text-left">
        {#if festivalList}
            {#each festivalList as festival}
            <tr>
                <td>{festival.name}</td>
                <td>{festival.description}</td>
                <td>{festival.city}</td>
                <td>{festival.country}</td>
                <td class="uk-text-center"><a href="/#/fest-dtls/{festival._id}" uk-icon="icon: plus"></a></td>
            </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>
