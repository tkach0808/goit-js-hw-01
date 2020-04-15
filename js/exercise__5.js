'use strict';

const deliveryCountry = prompt('Куда доставлять будем');
let countryNeme = '';
let deliveryPrice;

switch (deliveryCountry.toLocaleLowerCase()) {
  case 'китай':
    countryNeme = 'Китай';
    deliveryPrice = 100;
    break;

  case 'чили':
    countryNeme = 'Чили';
    deliveryPrice = 250;
    break;

  case 'австралия':
    countryNeme = 'Австралия';
    deliveryPrice = 170;
    break;

  case 'индия':
    countryNeme = 'Индия';
    deliveryPrice = 80;
    break;

  case 'ямайка':
    countryNeme = 'Ямайка';
    deliveryPrice = 120;
    break;

  default:
    deliveryPrice = 0;
    break;
}
if (deliveryPrice === 0) {
  alert('В вашей стране доставка не доступна');
} else {
  alert(`Доставка в ${countryNeme} будет стоить ${deliveryPrice} кредитов`);
}
