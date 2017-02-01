

$('img').click(function(){
    var light = $(this).attr("src");
    var temp;
    var dark = $(this).attr("ninja-src");
    temp = light;
    light = dark;
    dark = temp;
    $(this).attr({
      "src": light,
      "ninja-src": dark,
    });
})
