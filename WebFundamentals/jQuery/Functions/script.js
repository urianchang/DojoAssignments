var clicked = false;

$('#click-func').click(function(){
  clicked = !(clicked);
  if (clicked) {
    $(this).css("color", "red");
  } else {
    $(this).css("color", "black");
  }
})

$('#hide-func').click(function(){
  $('p').hide();
})

$('#show-func').click(function(){
  $('p').show();
})

$('#toggle-func').click(function(){
  $('#toggle-head').toggle(100);
})

$('#slide-D-func').click(function(){
  $('h2').slideDown();
})

$('#slide-U-func').click(function(){
  $('h2').slideUp();
})

$('#slide-T-func').click(function(){
  $('h1').slideToggle();
})

$('#fadein-func').click(function(){
  $('#fadein-text').fadeIn();
})

$('#fadeout-func').click(function(){
  $('#fadeout-text').fadeOut();
})

$('#addclass-func').click(function(){
  $('h1').addClass("section-title");
})

$("#before-func").click(function(){
  $("#p1-text").before("<h4>Hello</h4>");
})

$("#after-func").click(function(){
  $("#p2-text").after("<h4>Good-bye</h4>");
})

$("#append-func").click(function(){
  $("#p3-text").append(" Now I am complete!");
})

$('#html-func').click(function(){
  var htmlString = $(this).html();
  $('#p4-text').text(htmlString);
})

$('#p4-text').click(function(){
  $('#p4-text').html("<h2>Hello again!</h2>");
})

$('#attr-func').click(function(){
  var attributes = $(this).attr("id");
  $('#p5-text').append(attributes);
})

$('h1').click(function(){
  $(this).attr("class", "special");
})

$('#val-func').click(function(){
  var value = $('#input6').val();
  $('#p6-text').text(value);
})

$('h1').click(function(){
  var text = $(this).text();
  $('#input6').val("I've been reset");
})

$('#text-func').click(function(){
  $('#p7-text').text("UH OHH <b>:O</b>");
})

$('#data-head').data("group1", { first: 3.14, last: "pie"});
$('#data-func').click(function(){
  $('#s8').text($('#data-head').data("group1").first);
  $('#s9').text($('#data-head').data("group1").last);
})
