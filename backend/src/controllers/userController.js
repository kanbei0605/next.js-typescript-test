const userController = {};

userController.getName = (req, res) => {
  res.status(200).json({ user: req.user.email });
};

module.exports = userController;
