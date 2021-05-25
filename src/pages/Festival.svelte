<script>
    // import 'leaflet/dist/leaflet.css';
    import FestivalDtls from "../components/FestivalDtls.svelte"
    import {navBar, mainBar, subTitle, title} from "../stores";
    import {onMount, getContext} from 'svelte';
    import {LeafletMap} from "../services/leaflet-map";

    export let params;
    let festivalDtls;
    let festivalWeather;
    let map;
    let lat, lng;
    $: {console.log("In Festival with : " + params.id); getData();}
    const metalfestService = getContext("MetalfestService");
    const utilsService = getContext("UtilsService");

    async function getData() {
        festivalDtls = await metalfestService.getFestivalDtls(params.id);
        festivalWeather = await utilsService.getWeather(festivalDtls.city);

        lat = festivalDtls.latitude;
        lng = festivalDtls.longitude;

        let mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
            minZoom: 7,
        };

        if (!map) {
            map = new LeafletMap("festival-map", mapConfig, 'Terrain');
            map.showZoomControl();
            map.showLayerControl();
            const festStr = `${festivalDtls.city} ${festivalDtls.country}`;
            map.addMarker({lat: lat, lng: lng}, festStr);
        } else {
            let location = {lat: lat, lng: lng };
            map.moveTo(8, location);
            const festStr = `${festivalDtls.city} ${festivalDtls.country}`;
            map.addMarker({lat: lat, lng: lng}, festStr);
        }

        subTitle.set(festivalDtls.name);
    };

    onMount(async () => {
        festivalDtls = await metalfestService.getFestivalDtls(params.id);
        festivalWeather = await utilsService.getWeather(festivalDtls.city);

        lat = festivalDtls.latitude;
        lng = festivalDtls.longitude;

        subTitle.set(festivalDtls.name);
    });

    title.set("Metalfest");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center uk-grid">
    <FestivalDtls festivalDtls="{festivalDtls}" festivalWeather="{festivalWeather}" map="{map}"/>
</div>
