// 1.
const addTwoMultiplyOthers = function (...numbers) {
  if (numbers <= 2) throw new Error("Number of elements should be more than 2");

  const sum = numbers[0] + numbers[1];
  const [, , ...restNum] = numbers;
  const multiply = restNum.reduce((acc, curr) => acc * curr);
  return { sum, multiply };
};
// console.log(addTwoMultiplyOthers(1, 2, 3, 4, 5));
// console.log(addTwoMultiplyOthers(1));

// 2.
const user = {
  banks: [
    { address: { city: "Tbilisi" } },
    { address: { city: "Kutaisi" } },
    { address: { city: "Batumi" } },
  ],
};

const user2 = {
  banks: [{ address: { city: "Tbilisi" } }],
};

const objDestruct = function (obj) {
  const { banks = [] } = obj;
  const { address: { city } = {} } = banks[2] || {};
  return city;
};

// console.log(objDestruct(user));
// console.log(objDestruct(user2));

// 3.
const exampleObj = {
  name: "Sandro",
  age: 25,
  study: {
    name: "Skillwill",
    field: "React",
    grades: [1, 2, 3, 2, 1, 2],
  },
};

const objCopy = function (obj) {
  const coppiedObj = {
    ...obj,
    study: { ...obj.study, grades: [...obj.study.grades] },
  };
  return coppiedObj;
};
