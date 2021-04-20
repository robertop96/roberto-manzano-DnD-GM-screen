const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../db/models/user');

createUser = async (req, res) => {
  try {
    const { email, name, last_name, date_of_birth } = req.body;
    const password = await bcrypt.hash(req.body.password, 8);
    if (password) {
      const user = await new User({
        ...req.body,
        password
      }).save();
      const token = jwt.sign(
        { id: user.id, email: user.attributes.email },
        process.env.JWT_SECRET
      );
    }
    // res.send('hi');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = createUser;
