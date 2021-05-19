<script>
    import logo from "/src/assets/logo.png"
    import {title, subTitle} from "../stores";


</script>

<div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div>
            <a href="#offcanvas-push" uk-toggle title="Clickable list of all festivals" pos="bottom" uk-tooltip>
                <i class="fas fa-compass fa-3x" style="color:rgb(95, 96, 173)" title="Open Menu" pos="bottom" uk-tooltip></i>
                <div class="uk-width-expand@m uk-text-left">
                    <div class="uk-text-muted uk-text-center" style="font-size:xx-small">Open Menu</div>
                </div>
            </a>
        </div>
<!--        <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">-->
<!--            <div class="uk-offcanvas-bar">-->
<!--                <button class="uk-offcanvas-close" type="button" uk-close></button>-->
<!--                <div class="uk-width-1-2@s uk-width-2-5@m">-->
<!--                    <ul class="uk-nav uk-nav-default">-->
<!--                        {#if categories}-->
<!--                            {#each categories as category}-->
<!--                                <li class="uk-nav-header">{category.categoryName}</li>-->
<!--                                <li class="uk-nav-divider"></li>-->
<!--                                {#if category.categoryFestivals}-->
<!--                                    {#each category.categoryFestivals as fest}-->
<!--                                        <li><a href="/#/fest-dtls/{fest._id}">{fest.name}</a></li>-->
<!--                                    {/each}-->
<!--                                {/if}-->
<!--                            {/each}-->
<!--                        {/if}-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="uk-width-1-6@m">
            <a href="/"> <img src="{logo}" width="60" alt="img"/> </a>
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
        </div>
        <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
            <a target="_blank" href="https://github.com/SeamusMcCarthy/metalfest-web">
                <div>
                    <i class="fab fa-github fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
                </div>
                <div class="uk-width-expand@m uk-text-left">
                    <div class="uk-text-muted uk-text-center" style="font-size:xx-small">Metalfest 2.0</div>
                </div>
            </a>
        </div>
    </div>
</div>
