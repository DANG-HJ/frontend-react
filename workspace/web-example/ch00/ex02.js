var itemList = [
  { no: 1, todo: '두부', done: true},
  { no: 2, todo: '계란', done: false},
  { no: 3, todo: '라면', done: true},
];

console.log(itemList[0]);

var [first, second] = itemList;

console.log(first);
console.log(second);

var item = { no: 2, todo: '계란', done: false};
var {no, done:finish}=item;
// console.log(no, done);
console.log(no, finish);
console.log(no, item.todo);

var {no, ...etc}=item;
console.log(no, etc);

// function addItem(item){
//   if(item.done===undefined){
//     item.done=false;
//   }
//   item.done=item.done || false;
//   console.log(item.no, item.todo, item.done);
// }

function addItem({no, todo, done=false}){
  console.log(no, todo, done);
}

addItem({no:4, todo:'사과'});