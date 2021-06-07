import { Daemon, Magician } from './Character';

test.each([
  [100, 1, 100],
  [100, 2, 90],
  [100, 3, 80],
  [100, 4, 70],
  [100, 5, 60],
  [100, 6, 100],
])(
  ('Проверка вычисления атаки при разной дистанции'),
  (attack, distance, expected) => {
    const demon = new Daemon();
    demon.setAttack(attack, distance);
    const result = demon.getAttack();
    expect(expected).toBe(result);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 85],
  [100, 3, 72.1],
  [100, 4, 60],
  [100, 5, 48.4],
])(
  ('Проверка вычисления stoned атаки при разной дистанции'),
  (attack, distance, expected) => {
    const demon = new Daemon();
    demon.setAttack(attack, distance);
    demon.setStoned(true);
    const result = demon.getStoned();
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
    const demon = new Daemon();
    demon.setAttack(attack, distance);
    demon.setStoned(false);
    const result = demon.getStoned();
    expect(expected).toBe(result);
  },
);

test('Проверка класса Magician', () => {
  const mage = new Magician();
  mage.setAttack(100, 1);
  mage.setStoned(true);
  const result = mage.getStoned();
  expect(result).toBe(100);
});
