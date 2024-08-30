console.log("Example implementation of the worlds biggest casino.");
// Import
const Block = require("./block");

const block_chain = [];
block_chain.push(Block.genesis());

const test_block = Block.mineBlock(block_chain[0], "Testdaten!");
block_chain.push(test_block);

block_chain.forEach(block => console.log(block));