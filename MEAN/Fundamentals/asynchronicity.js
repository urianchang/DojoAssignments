//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  // data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
  // console.log("Callback start");
  // callback(data);
  // console.log("Callback stop");
  var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
          //it just got back from the DB!
          data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
          console.log("Callback start");
          callback(data);
          console.log("Callback stop");
      }
      console.log('Did you get data back from DB already?');
      catchFly();
  }, 2000);
  return data;
}

//simulated request
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(function myCallback(data) {
      console.log("Get data from DB");
      console.log(data, "ASynchronous");
      for (var i = 0; i < data.length; i++) {
          console.log(data[i].name);
      }
      console.log("Got all data from DB");
  });
  // console.log(data, "Synchronous");
}

function catchFly(){
  console.log('I just caught a fly!');
}

requestDataFromDatabase();
// console.log('Did you get data back from DB already?');
// catchFly();
