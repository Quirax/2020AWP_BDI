onLoad(function() {
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
    preset();
});