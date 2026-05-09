// Calculator core functions (exported for testing and reuse)
// Supported operations:
// - add: addition (supports 2 or more operands)
// - sub: subtraction (requires exactly 2 operands)
// - mul: multiplication (supports 2 or more operands)
// - div: division (requires exactly 2 operands, throws on division by zero)

function validateNumbers(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error('No numeric arguments provided');
  }
  for (const n of nums) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
      throw new Error('Non-numeric input provided');
    }
  }
}

function add(...nums) {
  validateNumbers(nums);
  if (nums.length < 2) throw new Error('add requires at least two numeric arguments');
  return nums.reduce((a, b) => a + b, 0);
}

function mul(...nums) {
  validateNumbers(nums);
  if (nums.length < 2) throw new Error('mul requires at least two numeric arguments');
  return nums.reduce((a, b) => a * b, 1);
}

function sub(a, b) {
  if (arguments.length !== 2) throw new Error('sub requires exactly two numeric arguments');
  validateNumbers([a, b]);
  return a - b;
}

function div(a, b) {
  if (arguments.length !== 2) throw new Error('div requires exactly two numeric arguments');
  validateNumbers([a, b]);
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (arguments.length !== 2) throw new Error('mod requires exactly two numeric arguments');
  validateNumbers([a, b]);
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function power(base, exponent) {
  if (arguments.length !== 2) throw new Error('power requires exactly two numeric arguments');
  validateNumbers([base, exponent]);
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (arguments.length !== 1) throw new Error('squareRoot requires exactly one numeric argument');
  validateNumbers([n]);
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
