const database = require("../dao/mysql");

class MathModel {
    constructor(limM, limN) {
        this.limM = limM;
        this.limN = limN;
    };
}

module.exports = MathModel;