const { response } = require('express');
const Product = require("../model/mathModel");
const service = require("../services/mathService");
const Output = require("../model/output");

class ProductController {
    async generateMath(req, res) {
        await service.generateMath(req.body)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Error","O limite inferior e superior são obrigatórios"));
                if(response == 0)
                    return res.status(400).json(new Output("400","Error","O body informado não está de acordo com o esperado. É necessário informar limM e limN."));
                
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async generateRecursion(req, res) {
        await service.generateRecursion(req.body)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Error","O limite inferior e superior são obrigatórios"));
                if(response == 0)
                    return res.status(400).json(new Output("400","Error","O body informado não está de acordo com o esperado. É necessário informar limM e limN."));
                
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
}

module.exports = new ProductController();