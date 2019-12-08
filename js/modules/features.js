class Features {
    constructor() {
        this.$DOM = {
            slider: $(".feature__slider")
        }

        this.$DOM.slider.slick({
            mobileFirst: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            fade: true,
            infinite: true,
            dots: true,
            customPaging: ()  => { return; },
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }
}