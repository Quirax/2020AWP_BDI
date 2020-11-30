onLoad(function() {
    $(".slide:not(:first)").add("#title *").css({
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
    $.getJSON("data/test.json", function(data) {
        var i = parseInt(location.hash.substring(1));
        var conf = data.results[i];
        $("#title h1").html(conf.title);
        $("#title p").html(conf.description);
        $("body").css({
            "background-color": conf.background || "white",
            "color": conf.color || "black"
        });
        $("#help > *").css({
            "border-color": conf.color || "black"
        });
    });
    $("#title *").animate({
        opacity: 1
    }, 1000);
});