<script>
    import {getContext, onMount} from "svelte";
    import {push} from "svelte-spa-router";
    const metalfestService = getContext("MetalfestService");
    export let name;
    export let festID;
    let files;
    let images = [];
    let success;
    let imagefile;
    let errorMessage;
    export let image;

    onMount(async () => {
        images = await metalfestService.getImagesTag(name);
    });

    async function deleteImage(id) {
        await metalfestService.deleteImage(id);
        push("/festivals");
    }

    async function upload() {
        let ifile = files[0];
        let reader = new FileReader();
        reader.onload = async function(e) {
            imagefile = e.target.result;
            console.log(imagefile);
            let success = await metalfestService.uploadImage(imagefile, name);
            if (success) {
                errorMessage = "Image added";
            } else {
                errorMessage = "Error trying to add image";
            }
        };
        reader.readAsDataURL(ifile);
        push("/festivals");
    }
</script>

<div class="uk-margin uk-width-1-1 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <div class="uk-container uk-padding-small">
        <img src="{image}" alt="">
    </div>
    <form on:submit|preventDefault={upload}>
        <div >
            <div class="uk-inline uk-width-1-1">
                <input class="uk-input uk-form-large" type="text" name="festName" value="{name}" hidden/>
                <input class="uk-input uk-form-large" type="text" name="festID" value="{festID}" hidden/>
            </div>
        </div>
        <div class="uk-card">
            <h3 class="uk-card-title">Upload your pics!!!</h3>
            <div class="uk-margin">
                <label class="uk-form-label" form="form-horizontal-text">Select Image</label>
                <div class="uk-form-controls">
                    <input bind:files type="file" class="uk-input" id="imagefile" name="Additional File" accept="image/png, image/jpeg, image/jpg" required>
                </div>
            </div>
        </div>
        <div class="uk-margin">
            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Add image</button>
        </div>
    </form>
    <div class="uk-container uk-padding-small">
        <div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid uk-height-match="target: .uk-card">
            {#if images}
            {#each images as image}
                <div>
                    <div class="uk-card uk-card-default uk-card-small uk-text-center uk-text-baseline uk-animation-scale-up">
                        <div class="uk-card-media-top">
                            <img src="{image.url}">
                        </div>
                        <div>
                            <div class="uk-card-footer">
                                <p> {image.public_id}</p>
                                <button class="uk-button uk-button-primary uk-button-small uk-width-1-2" on:click={() => deleteImage(image.public_id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            {/if}
        </div>
    </div>
</div>

