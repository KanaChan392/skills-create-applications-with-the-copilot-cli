#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add  : addition (supports 2 or more operands)
// - sub  : subtraction (requires exactly 2 operands)
// - mul  : multiplication (supports 2 or more operands)
// - div  : division (requires exactly 2 operands, checks division-by-zero)

// Usage examples:
//   node src/calculator.js add 1 2 3   # 6
//   node src/calculator.js sub 5 3     # 2
//   node src/calculator.js mul 4 2     # 8
//   node src/calculator.js div 10 2    # 5

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

// Validation helpers
function anyNaN(arr) {
  return arr.some((n) => Number.isNaN(n));
}

let result;
switch (op) {
  case 'add':
    if (nums.length < 2) usage('add requires at least two numeric arguments');
    if (anyNaN(nums)) usage('Non-numeric input provided');
    result = nums.reduce((a, b) => a + b, 0);
    break;

  case 'mul':
    if (nums.length < 2) usage('mul requires at least two numeric arguments');
    if (anyNaN(nums)) usage('Non-numeric input provided');
    result = nums.reduce((a, b) => a * b, 1);
    break;

  case 'sub':
    if (nums.length !== 2) usage('sub requires exactly two numeric arguments');
    if (anyNaN(nums)) usage('Non-numeric input provided');
    result = nums[0] - nums[1];
    break;

  case 'div':
    if (nums.length !== 2) usage('div requires exactly two numeric arguments');
    if (anyNaN(nums)) usage('Non-numeric input provided');
    if (nums[1] === 0) {
      console.error('Error: Division by zero');
      process.exit(2);
    }
    result = nums[0] / nums[1];
    break;

  default:
    usage(`Unknown operation: ${op}`);
}

// Print result
console.log(result);
process.exit(0);
