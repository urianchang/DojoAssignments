function makeImgURL(num) {
  var url = "http://pokeapi.co/media/img/" + num + ".png";
  return url;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    console.log("YOU'RE AT THE BOTTOM OF THE PAGE");
    var html_str = "<img src='" + makeImgURL(getRandomInt(1,151)) + "'>";
    console.log(html_str);
    $('body').append(
      "<div class='images1'>"+html_str+"</div>"
    );

  }
};
