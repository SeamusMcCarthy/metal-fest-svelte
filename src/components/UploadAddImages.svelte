<script>
    import {getContext, onMount} from "svelte";
    import {push} from "svelte-spa-router";
    const metalfestService = getContext("MetalfestService");
    export let name;
    let images = [];
    let success;
    onMount(async () => {
        images = await metalfestService.getImagesTag(name);
    });

    async function deleteImage(id) {
        // console.log("Delete image : " + id);
        await metalfestService.deleteImage(id);
        push("/festivals");
    }
</script>

<div class="uk-margin uk-width-1-1 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
<!--    <form action="/upload-add-image" method="POST" enctype="multipart/form-data" >-->
<!--        <div >-->
<!--            <div class="uk-inline uk-width-1-1">-->
<!--                <input class="uk-input uk-form-large" type="text" name="festName" value="{festivalDtls.name}" hidden/>-->
<!--                <input class="uk-input uk-form-large" type="text" name="festID" value="{festivalDtls._id}" hidden/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="uk-card">-->
<!--            <h3 class="uk-card-title">Upload your pics!!!</h3>-->
<!--            <div class="uk-margin">-->
<!--                <label class="uk-form-label" form="form-horizontal-text">Select Image</label>-->
<!--                <div class="uk-form-controls">-->
<!--                    <input type="file" class="uk-input" name="imagefile" accept="image/png, image/jpeg">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="uk-margin">-->
<!--            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Add image</button>-->
<!--        </div>-->
<!--    </form>-->
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
<!--                                <a href="/#/deleteimage/{image.public_id}" uk-icon="icon: trash"></a>-->
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

