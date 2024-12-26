const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate('thoughts friends')
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },