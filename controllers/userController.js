const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate('thoughts friends')
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(user => {
        if (!user) return res.status(404).json({ message: 'No user found' });
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .then(() => res.json({ message: 'User and thoughts deleted' }))
      .catch(err => res.status(500).json(err));
  },
};
