$('img').hover(
  function() {
      var initi = $(this).attr("src");
      var alte = $(this).attr("alt-src");
      var temp = initi;
      initi = alte;
      alte = temp;
      $(this).attr({
        "src": initi,
        "alt-src": alte
      });
  }, function() {
    var initi = $(this).attr("src");
    var alte = $(this).attr("alt-src");
    var temp = initi;
    initi = alte;
    alte = temp;
    $(this).attr({
      "src": initi,
      "alt-src": alte
    });
  }
);
