const students=[
  {id: 21,Name :'Mizan'},
  {id: 22,Name: 'Rony'},
  {id: 23,Name: 'Habib'},
  {id: 24,Name: 'Abir'}
];


const names=students.map(s => s.Name);

const ids=students.map(s => s.id);

const bigger=students.filter(s => s.id>22);

const bigger1=students.find(s => s.id>22);

console.log(names);

console.log(ids);

console.log(bigger);

console.log(bigger1);