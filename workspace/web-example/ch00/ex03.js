var itemList = [
  { no: 1, todo: '두부', done: false},
  { no: 2, todo: '계란', done: false},
  { no: 3, todo: '라면', done: false},
];

var newItemList = itemList;

var newItemList = [...itemList];

newItemList[1].done=true;

console.log(itemList, newItemList);
console.log(itemList === newItemList);