export function es5() {
  var Symbol = function(val) {
    this.key = val
  }

  var s = new Symbol('1')

}

export function es6() {
  var s = Symbol('1');
  return s;
}
