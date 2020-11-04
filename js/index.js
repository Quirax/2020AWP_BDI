onLoad(function() {
    $(".slide:not(:first)").css({
        opacity: 0
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $(".slide:not(:first):not(.animated)").each(function() {
            var $this = $(this);
            var top = $this.position().top;
            var height = $this.height();
            if(top - (height * 2/3) <= scrollTop)
                $this.animate({
                    opacity: 1
                }, 1000, function() {
                    $this.addClass("animated");
                });
        });
    }).scroll();
    $("#title *").animate({
        opacity: 1
    }, 1000);
});