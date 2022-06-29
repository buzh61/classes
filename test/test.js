import Character from '../src/js/Character';
import Bowman from '../src/js/Bowman';

test('Тестирование создания персонажа, если имя — число', () => {
  expect(() => new Bowman(123)).toThrow(Error);
});

test('Тестирование создания персонажа, если имя короткое', () => {
  expect(() => new Bowman('A')).toThrow(Error);
});

test('Тестирование создания персонажа, если имя длинное', () => {
  expect(() => new Bowman('AAARASTASRARARSSA')).toThrow(Error);
});

test('Тестирование создания персонажа, если такого класса нет', () => {
  expect(() => new Character('John', 'Barbarian')).toThrow(Error);
});

test('Тестирование создания персонажа, если все данные указаны правильно', () => {
  const character = new Bowman('Keno');
  const expectedData = {
    name: 'Keno',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(character).toEqual(expectedData);
});
