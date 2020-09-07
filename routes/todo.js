const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/list', todoController.getTasks);
router.post('/add', todoController.postTask);

module.exports = router;
