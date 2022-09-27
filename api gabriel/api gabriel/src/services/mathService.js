const { response } = require('express');
const Product = require("../model/mathModel");
const Validate = require("./validationService");
const Result = require("../model/result");

class MathService {

    async generateMath(body){
        if(!body)
            return null;
        if(Validate.validateBody(body)){  
            const result = Validate.calculateProduct(body.limM,body.limN);     
            return new Result(result);
        }else{
            return 0;
        }
    }

    async generateRecursion(body){
        if(!body)
            return null;
        if(Validate.validateBody(body)){  
            const result = Validate.calculateProductRecursion(body.limM,body.limN);     
            return new Result(result);
        }else{
            return 0;
        }
    }
}

module.exports = new MathService();