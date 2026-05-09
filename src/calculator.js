#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations (delegated to calculator-core):
// - add  : addition (supports 2 or more operands)
// - sub  : subtraction (requires exactly 2 operands)
// - mul  : multiplication (supports 2 or more operands)
// - div  : division (requires exactly 2 operands, checks division-by-zero)

#!/usr/bin/env node
const { add, sub, mul, div } = require('./calculator-core');
const [, , op, ...rawArgs] = process.argv;

function usage(errMsg) {
  if (errMsg) console.error('Error:', errMsg);
  console.error('\nUsage: node src/calculator.js <operation> <num1> <num2> [<num3> ...]');
  console.error('\nOperations: add, sub, mul, div');
  process.exit(errMsg ? 1 : 0);
}

if (!op) {
  usage('No operation provided');
}

const nums = rawArgs.map((s) => {
  const n = Number(s);
  return Number.isNaN(n) ? NaN : n;
});

// Validation helper
function anyNaN(arr) {
  return arr.some((n) => Number.isNaN(n));
}

let result;
try {
  switch (op) {
    case 'add':
      if (nums.length < 2) usage('add requires at least two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      result = add(...nums);
      break;

    case 'mul':
      if (nums.length < 2) usage('mul requires at least two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      result = mul(...nums);
      break;

    case 'sub':
      if (nums.length !== 2) usage('sub requires exactly two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      result = sub(nums[0], nums[1]);
      break;

    case 'div':
      if (nums.length !== 2) usage('div requires exactly two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      try {
        result = div(nums[0], nums[1]);
      } catch (e) {
        console.error('Error:', e.message);
        process.exit(2);
      }
      break;

    case 'mod':
      if (nums.length !== 2) usage('mod requires exactly two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      try {
        result = modulo(nums[0], nums[1]);
      } catch (e) {
        console.error('Error:', e.message);
        process.exit(2);
      }
      break;

    case 'pow':
      if (nums.length !== 2) usage('pow requires exactly two numeric arguments');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      result = power(nums[0], nums[1]);
      break;

    case 'sqrt':
      if (nums.length !== 1) usage('sqrt requires exactly one numeric argument');
      if (anyNaN(nums)) usage('Non-numeric input provided');
      try {
        result = squareRoot(nums[0]);
      } catch (e) {
        console.error('Error:', e.message);
        process.exit(2);
      }
      break;

    default:
      usage(`Unknown operation: ${op}`);
  }
} catch (e) {
  console.error('Error:', e.message || e);
  process.exit(1);
}

// Print result
console.log(result);
process.exit(0);
