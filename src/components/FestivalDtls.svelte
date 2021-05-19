<script>

    import UploadAddImages from "./UploadAddImages.svelte";
    import FestOptions from "./FestOptions.svelte";
    export let festivalDtls;
    export let festivalWeather;
    export let map;
</script>



<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center uk-grid">
<!--        <div class="uk-width-auto@m">-->
            <!--{#if festivalDtls}-->
            <!--    <img width="400" src="{festivalDtls.image.imageURL}" alt="">-->
            <!--{/if}-->
        <!--        </div>-->
        <div id="festival-map" class="ui embed" style="height:600px"></div>

        <div class="uk-width-expand@m">
            <div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <table class="uk-table uk-table-divider">
                    <caption>
                        Festival Details:
                    </caption>
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>City</th>
                        <th>Country</th>
                        <th></th>
                    </thead>
                    <tbody class="uk-text-left">
                        {#if festivalDtls}
                            <tr>
                                <td>{festivalDtls.name}</td>
                                <td>{festivalDtls.description}</td>
                                <td id="location-city"> {festivalDtls.city}</td>
                                <td id="location-country">{festivalDtls.country}</td>
                            </tr>
                        {/if}
                    </tbody>
                </table>
                <table id="weather-table" class="uk-table uk-table-divider">
                    <caption> Weather Report :</caption>
                    <thead>
                        <tr>
                            <th>Feels Like</th>
                            <th>Clouds</th>
                            <th>Wind Speed</th>
                            <th>Wind Direction</th>
                            <th>Visibility</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {#if festivalWeather}
                                <td>{festivalWeather.feelsLike}</td>
                                <td>{festivalWeather.clouds}</td>
                                <td>{festivalWeather.windSpeed}</td>
                                <td>{festivalWeather.windDirection}</td>
                                <td>{festivalWeather.visibility}</td>
                                <td>{festivalWeather.humidity}</td>
                            {/if}
                        </tr>
                    </tbody>
                </table>
            </div>
            {#if festivalDtls}
            <FestOptions fest="{festivalDtls}" />
                {/if}

            <div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <table class="uk-table uk-table-divider">
                    <caption>
                        Festival Attendees:
                    </caption>
                    <thead>
                    <th>Name</th>
                    </thead>
                    <tbody class="uk-text-left">
                    {#if festivalDtls}
                        {#each festivalDtls.attendees as attendee}
                            <tr>
                                <td>{attendee.firstName} {attendee.lastName}</td>
                            </tr>
                        {/each}
                    {/if}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
{#if festivalDtls}
<UploadAddImages name="{festivalDtls.name}" festID="{festivalDtls._id}" />
{/if}

