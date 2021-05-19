<script>
    import {user} from "../stores";
    import {getContext, onMount} from "svelte";

    let email = $user.email;
    console.log("Email : " + email);

    export let fest;
    let Uid = "";
    let attended = false;
    const metalfestService = getContext("MetalfestService");
    onMount(async () => {
        const userDtls = await metalfestService.getUserDtls(email);
        console.log("UserDtls : " + userDtls._id);
        Uid = userDtls._id;
        let i;
        for (i = 0; i < fest.attendees.length; i++) {
            if (fest.attendees[i]._id === Uid) {
                attended = true;
                break;
            }
        }
    });


</script>
<p uk-margin>
    {#if attended}
    <a class="uk-button uk-button-default" href="#">Already Attended</a>
        {:else}
    <a class="uk-button uk-button-primary" href="/attended/{fest._id}">Mark as Attended</a>'
        {/if}
    <a class="uk-button uk-button-danger" href="/delete-festival/{fest._id}">Delete Festival</a>
</p>
