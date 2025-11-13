let oldData = 'nodata';

const oldAPI = (callback) => {
  setTimeout(() => {
    callback('old');
  }, 100);
}
oldAPI((data) => {
  oldData = data;
});

///

let promiseData = 'nodata';

const promiseAPI = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('promise');
    }, 100);
  })
}

promiseAPI().then((data) => {
  promiseData = data;
});

///

let asyncawaitData = 'nodata';

const asyncawaitAPI = async () => {
  asyncawaitData = await promiseAPI();
  console.log(asyncawaitData);
}
asyncawaitAPI();