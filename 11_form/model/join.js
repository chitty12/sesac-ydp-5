// exports.tempUser = () => {
//   return [{ tempid: 'chitty', temppw: '1234' }];
// };

// exports.users = `apple//1234//사과사과
// banana//4321//바나나나나나
// happy//qwer1234//해피해피`;

const u = `apple//1234//사과사과
banana//4321//바나나나나나
happy//qwer1234//해피해피`;

const users = u.split('\n');

console.log(users);
for (let user of users) {
  user.split('//');
}
