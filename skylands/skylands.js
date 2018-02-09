$(window).load(function() {
    var carousel = $(".skylands"),
        item = $('.mangrove'),
        currdeg = 50,
        offset = -50;

    $(".fwd").on("click", { d: "n" }, rotate);
    $(".rev").on("click", { d: "p" }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 120;
            offset = offset - 180;
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 120;
            offset = 0;
        }
        carousel.css({
            "-webkit-transform": "rotateZ(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });

    }
});