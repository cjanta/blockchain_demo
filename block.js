
const SHA256 = require("crypto-js/sha256");

class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }

    static genesis(){
        return new this("Genesis time", "-----", "f1r57-h45h", ["Datenzeichenkette1", "Datenzeichenkette2"]);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash =  Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash , data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    
}

module.exports = Block;
