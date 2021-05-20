<script>
    import {user} from "../stores";
    import {getContext, onMount} from "svelte";
    import {push} from "svelte-spa-router";

    export let fest;
    let email = $user.email;
    let Uid = "";
    let attended = false;

    const metalfestService = getContext("MetalfestService");

    onMount(async () => {
        const userDtls = await metalfestService.getUserDtls(email);
        Uid = userDtls._id;
        let i;
        for (i = 0; i < fest.attendees.length; i++) {
            if (fest.attendees[i]._id === Uid) {
                attended = true;
                break;
            }
        }
    });

    async function attendFestival(fest, userID) {
        let success = await metalfestService.attendFestival(fest, userID);
        push("/festivals");
    };

    async function deleteFestival(fest) {
        let success = await metalfestService.deleteFestival(fest);
        push("/festivals");
    }
</script>

<p uk-margin>
    {#if attended}
        <button class="uk-button uk-button-primary uk-button-small uk-width-1-2" disabled>Already Attended</button>
    {:else}
        <button class="uk-button uk-button-primary uk-button-small uk-width-1-2" on:click={() => attendFestival(fest._id, Uid)}>Mark As Attended</button>
    {/if}
    <button class="uk-button uk-button-primary uk-button-small uk-width-1-2" on:click={() => deleteFestival(fest._id)}>Delete</button>
</p>
