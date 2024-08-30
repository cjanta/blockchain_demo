console.log("Example implementation of the worlds biggest casino.");
// Import
const Block = require("./block");
const Blockchain = require("./blockchain");

const chain = new Blockchain();
chain.addBlock("Erste Daten 01");
chain.addBlock("Zweite Daten 02");


chain.log();