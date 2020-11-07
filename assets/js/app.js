$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /*Fixed Header*/
    checkScroll(scrollOffset)

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this =$(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 400);
    });


    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /*Collapse*/

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this =$(this),
        blockId = $this.data('collapse');

        $this.toggleClass("active");
    });



});