$("form").submit(function(){
  var fname = $("input[name='firstname']").val();
  var lname = $("input[name='lastname']").val();
  var email = $("input[name='email']").val();
  var pnumb = $("input[name='phone']").val();
  console.log("submit has been pressed!");
  $('table').children().append(
    "<tr><td>" + fname + "</td><td>" + lname +
    "</td><td>" + email + "</td><td>" + pnumb +
    "</td></tr>"
  );
  return false;
})
