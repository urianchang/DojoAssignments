function genImg(num) {
  var html = "<img id=" + num + " src='http://pokeapi.co/media/img/" + num + ".png'>";
  return html;
}

//Show pokemon 1 - 151
for (var pk = 1; pk <= 151; pk++){
  $('.mon-list').append(genImg(pk));
}

function whosThat(num) {
  var url = "http://pokeapi.co/api/v1/pokemon/" + num + "/";
  var info_arr = []; //Name, image, Type(s), Height, Weight
  var imglink = genImg(num);
  $.get(url, function(res) {
    info_arr.push(res.name, imglink, res.types, res.height, res.weight);
    makeHTML(info_arr, num);
  }, "json");
}

function makeHTML(arr, num) {
  var html_str = "<h1>#" + num + ": " + arr[0] + "</h1>" + arr[1] + "<h2>Type(s):</h2><ul>";
  for (var idx = 0; idx < arr[2].length; idx++) {
    html_str += "<li>" + arr[2][idx].name + "</li>";
  }
  html_str += "</ul><h2>Height:</h2><p>" + arr[3] + "</p><h2>Weight:</h2><p>" + arr[4] + "</p>";
  $('.pokedex').html(html_str);
}

//What happens when a specific pokemon is clicked...
$('img').click(function(){
  var num = $(this).attr("id");
  console.log("pkmn selected");
  whosThat(num);
})

//Light up the pokemon when it's hovered on in the monster list
$('.mon-list img').hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "blue");
})
