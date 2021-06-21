import { Daemon, Magician } from './Character';

test.each([
  [100, 1, 100],
  [100, 2, 90],
  [100, 3, 80],
  [100, 4, 70],
  [100, 5, 60],
  [100, 6, 50],
])(
  ('Проверка вычисления атаки при разной дистанции'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    const result = demon.attack;
    expect(expected).toBe(result);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 85],
  [100, 3, 72],
  [100, 4, 60],
  [100, 5, 48],
])(
  ('Проверка вычисления stoned атаки при разной дистанции'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    demon.stoned = true;
    const result = demon.attack;
    expect(expected).toBe(result);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 90],
  [100, 3, 80],
  [100, 4, 70],
  [100, 5, 60],
])(
  ('Проверка вычисления stoned атаки при разной дистанции если stoned выключен'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    demon.stoned= false;
    const result = demon.attack;
    expect(expected).toBe(result);
  },
);

test('Проверка класса Magician', () => {
  const mage = new Magician(1);
  mage.attack = 100;
  mage.stoned = true;
  const result = mage.attack;
  expect(result).toBe(100);
});
