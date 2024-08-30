console.log("Example implementation of the worlds biggest casino.");
// Import
const Block = require("./block");

const block_chain = [];

const test_block = Block.mineBlock(Block.genesis(), "Testdaten!");
console.log(test_block.toString());