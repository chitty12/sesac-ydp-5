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
console.log(user.length);
const id = [];
const pw = [];
const name1 = [];
for (i = 0; i < user.length; i++) {
  const ids = user[i].split('//')[0];
  id.push(ids);
  const pws = user[i].split('//')[1];
  pw.push(pws);
  const names = user[i].split('//')[2];
  name1.push(names);
}
