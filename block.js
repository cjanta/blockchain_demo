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
        const hash = " to Do hash";

        return new this(timestamp, lastHash, hash , data);
    }
    
}

module.exports = Block;
