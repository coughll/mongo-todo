const todo = require('../models/todo-item.js');

module.exports = function (app) {

  app.get('/api/todos', function (req, res) {
    todo.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/todos', function (req, res) {
    todo.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/todos/:id', function (req, res) {
    todo.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/todos/:id', function (req, res) {
    todo.findOneAndDelete({_id: req.params.id})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}