const { User } = require("../models/User");

let auth = (req, res, next) => {
  // Authentication
  // Get token from client cookie
  console.log("cookie", req.cookies);
  let token = req.cookies.token;
  // Decode token & Find user
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ isAuth: false, error: true });
    }

    req.token = token;
    req.user = user;
    next();
  });
  // If user exists, auth success
  // If not, auth fail
};

module.exports = { auth };
