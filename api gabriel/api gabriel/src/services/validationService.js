class ValidationService{
    validateCreate(obj, db){
        if(obj.name == null || obj.name == "")
            return false;  
        if(db.find(x => x.name == obj.name))
            return false;
        
        return true;
    }

    validateUpdate(code,obj,db){
        if(db.find(x => x.id == obj.id)){
            if(code != obj.id)
                return false;
        }
        return true;
    }

    validateBody(code){
        if(code.limM == null)
            return false;
        if(code.limN == null)
            return false;
        if(code.limN < code.limM)
            return false;
        return true;
    }

    calculateProduct(limM,limN){
        var product = 1;
        for(var i = limM; i <= limN; i++){
            var secondPart = (i+(1/i));
            product = product * secondPart;
        }
        return product
    }

    calculateProductRecursion(limM,limN){
        var product = 1;
        var secondPart = (limM + (1/limM));
        if(limM != limN){
            return secondPart * this.calculateProductRecursion(limM+1, limN);
        }else{
            return secondPart;
        }
    }
}

module.exports = new ValidationService();
