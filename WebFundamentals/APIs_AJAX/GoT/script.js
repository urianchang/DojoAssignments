//Helper function that makes the house details HTML
function makeHTML(name, words, region, founded, titles) {
  var html_str = "<h1>House Details</h1><p>Name: " + name + "</p><p>Words: " +
    words + "</p><p>Region: " + region + "</p><p>Founded: " + founded +
    "</p><p>Titles: ";
  for (var i = 0; i < titles.length; i++) {
    html_str += titles[i] + ", ";
  }
  html_str += "</p>";
  $(".details").html(html_str);
}

$("img").click(function(){
  var h_id = $(this).attr("id");
  console.log("id: "+h_id);
  var url = "http://www.anapioficeandfire.com/api/houses/" + h_id + "/";
  $.get(url, function(res){
    makeHTML(res.name, res.words, res.region, res.founded, res.titles);
  }, "json");
});

// $.get("http://www.anapioficeandfire.com/api/houses/378/", function(res){
//   console.log(res);
// }, "json");

// $.get(s_url, function(res){
//   makeHTML(res.name, res.words, res.region, res.founded, res.titles);
// }, "json");

//For reference...
// var stark_url = "http://www.anapioficeandfire.com/api/houses/362";
// var targ_url = "http://www.anapioficeandfire.com/api/houses/378";
// var lann_url = "http://www.anapioficeandfire.com/api/houses/229";
// var barat_url = "http://www.anapioficeandfire.com/api/houses/17";

//Name: res.name
//Words: res.words
//Region: res.region
//Founded: res.founded
//Titles: res.titles (array)
