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
  validateNumbers([a, b]);
  if (arguments.length !== 2) throw new Error('sub requires exactly two numeric arguments');
  return a - b;
}

function div(a, b) {
  validateNumbers([a, b]);
  if (arguments.length !== 2) throw new Error('div requires exactly two numeric arguments');
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, sub, mul, div };
