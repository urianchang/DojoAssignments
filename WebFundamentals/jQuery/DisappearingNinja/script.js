$('img').click(function(){
  console.log("::wind rustles::");
  $(this).hide(500);
})
$('button').click(function(){
  console.log("NINJAS, RETURN!");
  $('img').show();
})
