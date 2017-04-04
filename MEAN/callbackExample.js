function myOriginalFunction() {
    console.log('hello');
}

//myOriginalFunction();

function invokedFunction(callback) {
    var x = setInterval(function() {
        callback();
    }, 4000)
}

invokedFunction(myOriginalFunction);
invokedFunction(function(){console.log('world')});
