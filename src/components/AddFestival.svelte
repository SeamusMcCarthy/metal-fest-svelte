<script>
    import {getContext, onMount} from "svelte";

    let name;
    let city;
    let country;
    let latitude;
    let longitude;
    let description;
    let startDate;
    let endDate;
    let categoryList;
    let errorMessage = "";
    let files = [];
    let imagefile;

    const metalfestService = getContext("MetalfestService");

    let categories;
    onMount(async () => {
        categories = await metalfestService.getCategories();
    });

    async function addFestival() {
        let ifile = files[0];
        let reader = new FileReader();
        reader.onload = async function(e) {
            imagefile = e.target.result;
            let success = await metalfestService.addFestival(name, city, country, latitude, longitude, description, startDate, endDate, imagefile, categoryList);
            if (success) {
                errorMessage = "Festival added";
            } else {
                errorMessage = "Error trying to add festival";
            }
        };
        reader.readAsDataURL(ifile);
    }
</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large uk-animation-scale-up">
<form on:submit|preventDefault={addFestival}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
<!--                <input class="uk-input uk-form-large" type="text" name="name" placeholder="Festival name" required/>-->
                <input bind:value={name}
                       class="uk-input uk-form-large" type="text"
                       name="name" placeholder="Festival name" required>
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={city} class="uk-input uk-form-large" type="text" name="city" placeholder="City" required/>
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={country} class="uk-input uk-form-large" type="text" name="country" placeholder="Country" required/>
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={latitude} class="uk-input uk-form-large" type="number" min="-90.00" max="90.00" step="0.00001" name="latitude" placeholder="Latitude" />
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={longitude} class="uk-input uk-form-large" type="number" min="-180.00" max="180.00" step="0.00001" name="longitude" placeholder="Longitude" />
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={description} class="uk-input uk-form-large" type="text" name="description" placeholder="Festival description" required/>
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={startDate} class="uk-input uk-form-large" type="date" name="startDate" placeholder="Start date" required/>
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
                <input bind:value={endDate} class="uk-input uk-form-large" type="date" name="endDate" placeholder="End date" required/>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label uk-form-large" >Select genre(s)</label>
            <div class="uk-inline uk-width-1-1">

        <select class="uk-form-large" multiple bind:value={categoryList}>
            {#if categories}
            {#each categories as categoryInst}
                <option value={categoryInst.categoryName}>
                    {categoryInst.categoryName}
                </option>
            {/each}
                {/if}
        </select>
            </div>
        </div>
    </div>
    <div class="uk-card uk-card-danger uk-card-body">
        <h3 class="uk-card-title">Main Festival Image Upload</h3>
        <div class="uk-margin">
            <label class="uk-form-label" form="form-horizontal-text">Select Image</label>
            <div class="uk-form-controls">
                <input bind:files type="file" class="uk-input" id="imagefile" name="imagefile" accept="image/png, image/jpeg, image/jpg" required>
            </div>
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Add Festival Listing</button>
    </div>
    {#if errorMessage}
        <div class="uk-text-left uk-text-small">
            {errorMessage}
        </div>
    {/if}
</form>
</div>

