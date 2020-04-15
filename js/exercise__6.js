'use strict';

let input;
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  const inputToNumber = Number(input);
  if (Number.isNaN(inputToNumber)) {
    alert('Вы ввели не число');
  } else {
    total += inputToNumber;
  }
}

alert(total);
