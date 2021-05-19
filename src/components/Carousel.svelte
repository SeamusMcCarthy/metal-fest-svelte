<script>
    import band1 from "/src/assets/band1.jpg";
    import band2 from "/src/assets/band2.jpg";
    import band3 from "/src/assets/band3.jpg";
</script>

<div class="uk-container uk-container-medium uk-margin">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
        <ul class="uk-slideshow-items">
            <li>
                <img src="{band1}" alt="" uk-cover>
            </li>
            <li>
                <img src="{band2}" alt="" uk-cover>
            </li>
            <li>
                <img src="{band3}" alt="" uk-cover>
            </li>
        </ul>
        <div class="titleMessage">
            <div class="heading">
                <p class="main">MetalFest</p>
                <p class="sub typed"></p>
            </div>
        </div>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
</div>
