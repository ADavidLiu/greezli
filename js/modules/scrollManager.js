class ScrollManager {
    constructor() {
        this.$DOM = {
            window: $(window),
            header: $(".header"),
            trigger: $("[data-scroll-trigger]")
        }

        this.$DOM.trigger.click(this.scroll);
    }

    scroll = e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-scroll-trigger");
        const $target = $(`[data-scroll-target="${target}"]`);
        $.scrollTo($target, 500);
    }
}