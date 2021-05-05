export const people = [
  {
    id: '0',
    name: 'Jun',
    age: 26,
    gender: 'male'
  },
  {
    id: '1',
    name: 'Jack',
    age: 21,
    gender: 'male'
  },
  {
    id: '2',
    name: 'Isaiah',
    age: 24,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Vitalii',
    age: 32,
    gender: 'male'
  },
  {
    id: '4',
    name: 'Raphael',
    age: 34,
    gender: 'male'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
