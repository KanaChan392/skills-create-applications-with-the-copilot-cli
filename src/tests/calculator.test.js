const { add, sub, mul, div } = require('../calculator-core');

describe('Calculator core', () => {
  describe('addition', () => {
    test('adds 2 + 3 => 5 (from image example)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds multiple numbers', () => {
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    test('throws when not enough args', () => {
      expect(() => add(1)).toThrow(/at least two/);
    });
  });

  describe('subtraction', () => {
    test('sub 10 - 4 => 6 (from image example)', () => {
      expect(sub(10, 4)).toBe(6);
    });

    test('requires exactly two args', () => {
      expect(() => sub(1)).toThrow(/exactly two/);
    });
  });

  describe('multiplication', () => {
    test('mul 45 * 2 => 90 (from image example)', () => {
      expect(mul(45, 2)).toBe(90);
    });

    test('requires at least two args', () => {
      expect(() => mul(5)).toThrow(/at least two/);
    });
  });

  describe('division', () => {
    test('div 20 / 5 => 4 (from image example)', () => {
      expect(div(20, 5)).toBe(4);
    });

    test('division by zero throws', () => {
      expect(() => div(1, 0)).toThrow(/Division by zero/);
    });

    test('requires exactly two args', () => {
      expect(() => div(1)).toThrow(/exactly two/);
    });
  });
});
