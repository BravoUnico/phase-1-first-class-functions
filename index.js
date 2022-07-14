

function receivesAFunction(callback) {
    callback();
}
const returnsANamedFunction = function() {
   return function fn() {}
}
const returnsAnAnonymousFunction = function() {
    return function() {}
}
