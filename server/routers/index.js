const express = require('express');
const router = express();
const fetchController = require('../controller/fetch');

router.get('/', fetchController.fetch);

module.exports = router;