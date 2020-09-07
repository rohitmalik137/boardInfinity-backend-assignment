const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const todoController = require('../controllers/todo');

router.get('/list', todoController.getTasks);
router.post(
  '/add',
  [
    body('name').trim().isLength({ min: 5 }),
    body('description').trim().isLength({ min: 5 }),
  ],
  todoController.postTask
);

module.exports = router;
