function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
      reject(new Error('에러에요'));
    }, 1000);
  });
}

function back(result) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');

      // resolve(result);
      reject(new Error('에러에요'));
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const msg = 'callback hell';
      resolve(msg);
      reject(new Error('에러에요'));
    }, 1000);
  });
}

call('kim')
  .then(function (result) {
    console.log(result + '반가워');
    return back('back');
  })
  .then(function (result) {
    console.log(result + '을 실행했구나');
    return hell();
  })
  .then(function (result) {
    console.log('여기는' + result);
  })
  .catch((error) => console.log(error));
