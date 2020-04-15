'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt('Сколько дроидов вам нужно???');
const totalPrice = pricePerDroid * numberOfDroids;

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
