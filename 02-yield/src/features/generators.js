export function es5(n) {
  function counter(n) {
    var cnt = 0

    function next() {
      if (cnt < n) {
        return cnt += 1
      }
    }

    return next
  }

  return counter(n)
}

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/function*
export function es6(n) {
  function* counter(n) {
    let index = 0;
    while (index < n) {
      yield index += 1;
    }
  }
  return counter(n);
}
