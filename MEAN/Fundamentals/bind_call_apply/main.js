//: Rev 1
// // our test object
// var customObject = {
//   name:'California, Eureka',
//   onClick:function(){
//     console.log("I've been clicked");
//     console.log(this.name);
//   }
// }
//
// // a new object appears!
// var newObject = {
//   name:"West Virginia,  Montani semper liberi"
// }
//
// //: our behavior on click.
// // v1: $('button').click(customObject.onClick);
// // v2: $('button').click(customObject.onClick.bind(customObject));
// $('button').click(customObject.onClick.bind(newObject));

//: Rev 2
//: WARNING: BIND CREATES A NEW METHOD OR OVERWRITES A METHOD IN THE OBJECT
// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
