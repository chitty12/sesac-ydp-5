function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve(txt);
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

async function exec() {
  let name = await call('kim');
  console.log(name + '반가워');
  let txt = await back('back');
  console.log(txt + '을 실행했구나');
  let msg = await hell();
  console.log('여기는' + msg);
}

exec();
