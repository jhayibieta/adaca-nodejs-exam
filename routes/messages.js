const express = require('express');
const MessagesController = require('../controllers/messages.controller');
const router = express.Router();


router.get('/', MessagesController.messageList);
router.post('/', MessagesController.createMessages);


module.exports = router;
