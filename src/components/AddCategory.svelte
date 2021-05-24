<script lang="ts">
    import {getContext} from "svelte";
    export let catJustAdded;
    let categoryName = "";
    let message = "";

    const metalfestService = getContext("MetalfestService");

    async function addCategory() {
        let success = await metalfestService.addCategory(categoryName);
        if (success) {
            if (catJustAdded) catJustAdded();
        } else {
            message = "Error trying to add category";
        }
    }
</script>
<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
<form on:submit|preventDefault={addCategory}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <label class="uk-form-label">Category</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: play-circle"></span> <input bind:value={categoryName}
                                                                               class="uk-input uk-form-large" type="text"
                                                                               name="categoryName">
            </div>
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Add Category</button>
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>
</div>
