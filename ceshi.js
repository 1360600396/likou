function fn1(fn) {
  let boolean = false;
  return function (...args) {
    if (boolean == true) {
      console.log("undefined")
      return undefined
    }
    boolean = true;
    fn(...args);
  };
}

function fn() {
  console.log("123");
}

let fn2 = fn1(fn);

fn2()
fn2()

