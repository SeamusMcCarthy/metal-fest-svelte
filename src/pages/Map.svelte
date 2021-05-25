<script>
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    const metalfestService = getContext("MetalfestService");
    let lat = 52.160858;
    let lng = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 4,
            minZoom: 2,
        };
        map = new LeafletMap("full-map", mapConfig, 'Terrain');
        map.addLayerGroup('Festivals');
        map.showZoomControl();
        map.showLayerControl();

        const festivals = await metalfestService.getFestivals();
        festivals.forEach(festival=>{
            const festStr = `<a href="#/fest-dtls/${festival._id}">${festival.name} ${festival.city} ${festival.country}</a>`;
            if (festival.latitude) {
                map.addMarker({lat: festival.latitude, lng: festival.longitude}, festStr, 'Festivals');
            }
        });
    });

    title.set("MetalFest");
    subTitle.set("Map of all festivals");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="full-map" class="ui embed" style="height:800px"></div>
    </div>
</div>
