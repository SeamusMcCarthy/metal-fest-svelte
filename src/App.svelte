<script>
    import {setContext} from 'svelte';
    import Main from "./pages/Main.svelte";
    import Login from "./pages/Login.svelte";
    import Signup from "./pages/Signup.svelte";
    import FestivalCover from "./pages/FestivalCover.svelte";
    import CategoryCover from "./pages/CategoryCover.svelte";
    import Festival from "./pages/Festival.svelte";
    import Settings from "./pages/Settings.svelte";
    import {MetalfestService} from "./services/metalfest-service";
    import {UtilsService} from "./services/utils-service";
    import Navigator from "./components/Navigator.svelte";
    import Router from "svelte-spa-router";
    import Sidebar from "./components/Sidebar.svelte";

    // setContext("MetalfestService", new MetalfestService("http://localhost:4000"));
    // setContext("UtilsService", new UtilsService("http://localhost:4000"));
    setContext("MetalfestService", new MetalfestService("https://radiant-plateau-89790.herokuapp.com"));
    setContext("UtilsService", new UtilsService("https://radiant-plateau-89790.herokuapp.com"));

    let routes = {
        "/": Main,
        "/login": Login,
        "/signup": Signup,
        "/festivals": FestivalCover,
        "/categories": CategoryCover,
        "/fest-dtls/:id": Festival,
        "/logout": Main,
        "/settings": Settings,
    }

</script>

<Navigator  />
<div class="uk-container">
    <Router {routes} />
</div>
<Sidebar />

