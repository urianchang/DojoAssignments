function fib() {
  var prev = 0;
  var cur = 1;
  function nacci() {
    console.log(cur);
    var temp = cur;
    cur = prev + cur;
    prev = temp;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
