// promise.race

Promise.myRace = (promises) => {
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2);
});

Promise.myRace([promise1, promise2]).then((value) => {
  console.log(value) // 2
});

Promise.myRace([promise1, promise2, 3]).then((value) => {
  console.log(value) // 3
});