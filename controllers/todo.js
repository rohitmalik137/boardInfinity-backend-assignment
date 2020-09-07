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
  const name = req.body.name;
  const description = req.body.description;
  const creator = req.body.creator;
  const duration = req.body.duration;

  console.log(name, description, creator, duration);
  next();
};
