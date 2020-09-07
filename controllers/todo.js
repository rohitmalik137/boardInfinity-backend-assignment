// const cron = require('node-cron');
const { validationResult } = require('express-validator');

const Todo = require('../models/todo');

exports.getTasks = (req, res, next) => {
  Todo.find()
    .then((tasks) => {
      res.status(200).json({
        message: 'Posts Fetched Successfully',
        tasks: tasks,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postTask = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res
      .status(422)
      .json({
        message: 'validation failed, min length should be 5 chars', 
        errors: errors.array()
      });
  }

  const name = req.body.name;
  const description = req.body.description;
  const creator = req.body.creator;
  const duration = req.body.duration;

  let today = new Date();
  var expiryDate = today.valueOf() + duration * 60 * 1000;

  console.log(name, description, creator, duration);
  const todo = new Todo({
    name: name,
    description: description,
    creator: creator,
    duration: expiryDate,
  });
  todo
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Todo created successfully!',
        todo: result,
      });
      // return result;
    })
    // .then((result) => {
    //   console.log(`${duration}`);
    //   cron.schedule(`* * * * * *`, function () {
    //     console.log('hahahahhaha');
    //   });
    // })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
