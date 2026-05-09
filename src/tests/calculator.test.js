const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator-core');

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

  describe('modulo', () => {
    test('mod 10 % 3 => 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('mod by zero throws', () => {
      expect(() => modulo(10, 0)).toThrow(/Division by zero/);
    });

    test('requires exactly two args', () => {
      expect(() => modulo(5)).toThrow(/exactly two/);
    });
  });

  describe('power', () => {
    test('power 2 ^ 3 => 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power with negative exponent', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });

    test('requires exactly two args', () => {
      expect(() => power(2)).toThrow(/exactly two/);
    });
  });

  describe('squareRoot', () => {
    test('sqrt 9 => 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('sqrt negative throws', () => {
      expect(() => squareRoot(-1)).toThrow(/negative/);
    });

    test('requires exactly one arg', () => {
      expect(() => squareRoot()).toThrow(/exactly one/);
    });
  });
});
