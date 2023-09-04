'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

function sanitizeFruitBasket(basket, fruitToRemove) {
  return basket.filter((fruit) => fruit !== fruitToRemove);
}

describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const sanitizedBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(sanitizedBasket.includes('lemon')).toBe(false);
  });
});
