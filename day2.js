var initialMemory = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  10,
  19,
  1,
  19,
  6,
  23,
  2,
  23,
  13,
  27,
  1,
  27,
  5,
  31,
  2,
  31,
  10,
  35,
  1,
  9,
  35,
  39,
  1,
  39,
  9,
  43,
  2,
  9,
  43,
  47,
  1,
  5,
  47,
  51,
  2,
  13,
  51,
  55,
  1,
  55,
  9,
  59,
  2,
  6,
  59,
  63,
  1,
  63,
  5,
  67,
  1,
  10,
  67,
  71,
  1,
  71,
  10,
  75,
  2,
  75,
  13,
  79,
  2,
  79,
  13,
  83,
  1,
  5,
  83,
  87,
  1,
  87,
  6,
  91,
  2,
  91,
  13,
  95,
  1,
  5,
  95,
  99,
  1,
  99,
  2,
  103,
  1,
  103,
  6,
  0,
  99,
  2,
  14,
  0,
  0
];
var address = 0;
var OPERATION_ADD = 1;
var OPERATION_MULTIPLY = 2;
var OPERATION_HALT = 99;
var target = 19690720;

function reset(noun, verb) {
  memory = initialMemory.slice();
  memory[1] = noun;
  memory[2] = verb;
  address = 0;
}

function run() {
  var running = true;
  while (running) {
    switch (memory[address]) {
      case OPERATION_ADD:
        memory[memory[address + 3]] =
          memory[memory[address + 1]] + memory[memory[address + 2]];
        break;
      case OPERATION_MULTIPLY:
        memory[memory[address + 3]] =
          memory[memory[address + 1]] * memory[memory[address + 2]];
        break;
      case OPERATION_HALT:
        running = false;
        continue;
      default:
        throw new Error("Unknown opcode: " + memory[address]);
    }

    address += 4;
  }
}

function part1() {
  reset(12, 2);
  run();
  return memory[0];
}

function part2() {
  for (var noun = 0; noun < 100; noun++) {
    for (var verb = 0; verb < 100; verb++) {
      reset(noun, verb);
      run();
      if (memory[0] === target) {
        return 100 * noun + verb;
      }
    }
  }
}

console.log("### Day 2 ###");
console.log("Part 1: " + part1());
console.log("Part 2: " + part2());
