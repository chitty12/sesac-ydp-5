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

async function exec() {
  let name = await call('kim');
  console.log(name + '반가워');
  let txt = await back('kim');
  console.log(txt + '을 실행했구나');
  let msg = await hell('kim');
  console.log('여기는' + msg);
}

exec();
