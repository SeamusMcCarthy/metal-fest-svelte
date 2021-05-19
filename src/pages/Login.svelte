<script>
    import LoginForm from "../components/LoginForm.svelte";
    import band2 from "/src/assets/band2.jpg";
    import {navBar, welcomeBar, subTitle, title} from "../stores"

    title.set("Metalfest");
    subTitle.set("Please login below...");
    navBar.set({
        bar: welcomeBar
    });
</script>

<!--<div class="uk-text-center" uk-grid>-->
<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
<div >
<!--        <img width="300" src="{band2}" alt="homer">-->
    <img src="{band2}" alt="homer">
    </div>
    <div >
        <!--        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">-->
        <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
        <LoginForm />
        <!--        </div>-->
    </div>
</div>
</div>
