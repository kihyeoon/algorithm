const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];

let output = convertListToObject(arr);

console.log(output)
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }

function convertListToObject(arr) {
  let result = {};
  arr.map((el) => {
    if (el.length !== 0 && result[el[0]] === undefined) {
      result[el[0]] = el[1];
    }
  });
  return result;
}
