// exports.tempUser = () => {
//   return [{ tempid: 'chitty', temppw: '1234' }];
// };

// exports.users = `apple//1234//사과사과
// banana//4321//바나나나나나
// happy//qwer1234//해피해피`;

const users = `apple//1234//사과사과
 banana//4321//바나나나나나
 happy//qwer1234//해피해피`;

const user = users.split('\n');
console.log(user[0].split('//'));

// for (i = 0; i <= user.length; i++) {
//   const ids = user[i].split('//');
//   const pws = user[i].split('//');
//   const names = user[i].split('//');
// }

// console.log(ids);
// console.log(pws);
// console.log(names);
