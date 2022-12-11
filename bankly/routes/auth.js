/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');

// BUG #7: No proper JSONschema validation was implemented. Now there is.
const validateJsonSchema = require("../helpers/userSchema")
const userRegisterSchema = require("../schemas/userRegister.json");


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 * BUG #5: admin boolean has been added.
 */

router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone, admin } = req.body;
    // BUG #7: Including a schema validator.
    validateJsonSchema(req.body, userRegisterSchema);
    let user = await User.register({username, password, first_name, last_name, email, phone, admin });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = User.authenticate(username, password);
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
