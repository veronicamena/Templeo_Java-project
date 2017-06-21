$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 290) {
        $(".filters-area").addClass("fixed");

        $(".navbar-templeo-inner").addClass("fixed");
    } else {
        $(".filters-area").removeClass("fixed");

        $(".navbar-templeo-inner").removeClass("fixed");
    }
});



