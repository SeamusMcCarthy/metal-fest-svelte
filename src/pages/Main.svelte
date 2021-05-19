<script>
    import Carousel from "../components/Carousel.svelte";
    import {navBar, welcomeBar, subTitle, title} from "../stores"

    title.set("Metalfest");
    subTitle.set("Welcome to Metalfest - Your home for festival listings");
    navBar.set({
        bar: welcomeBar
    });
</script>


<Carousel />

