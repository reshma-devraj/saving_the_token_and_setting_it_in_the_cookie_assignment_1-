const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const encrypt = (payload) => {
  // encrypt the payload and return token
  const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });
  return token;
}

const decrypt = (token) => {
  // return decoded payload
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (err) {
    console.error('Invalid token ❌', err.message);
    return null;
  }
}

module.exports = {
  encrypt,
  decrypt
}
