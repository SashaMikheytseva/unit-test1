import healthBar from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
])(('checking health status in %s'), (object, expected) => {
  expect(healthBar(object)).toBe(expected);
});
