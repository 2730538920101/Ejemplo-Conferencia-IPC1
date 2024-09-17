const express = require('express');
const mainController = require('../controladores/mainController');
const router = express.Router();

router.get('/', mainController.hello);
router.post('/postMethod', mainController.postMethod);
router.get('/getMethod', mainController.getMethod);
router.get('/getContact/:nombre', mainController.getContactByName);

module.exports = router;