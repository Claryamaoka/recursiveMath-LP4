//padrão da rota da api : 
//preferencialmente no plural 

const express = require('express');
const route = express.Router();

const mathController = require('../controllers/mathController');  

// Rotas de produtos
route.get('/math', mathController.generateMath);
route.get('/mathRecursive', mathController.generateRecursion);

module.exports = route;