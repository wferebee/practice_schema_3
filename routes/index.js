var express = require('express');
var router = express.Router();
var carController = require('../controller/index.js')

router.get('/cars', carController.list);

router.get('/cars/:make', carController.show);
    
router.post('/', carController.create);

module.exports = router;