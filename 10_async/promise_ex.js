function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      const result = name;
      resolve(result);
    }, 1000);
  });
}

function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      const txt = 'back';
      resolve(txt);
    }, 1000);
  });
}

function hell(msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const msg = 'callback hell';
      resolve(msg);
    }, 1000);
  });
}

call('kim')
  .then(function (result) {
    console.log(result + '반가워');
    return back();
  })
  .then(function (txt) {
    console.log(txt + '을 실행했구나');
    return hell();
  })
  .then(function (msg) {
    console.log('여기는' + msg);
  });
