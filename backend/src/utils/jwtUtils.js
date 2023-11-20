import jwt from 'jsonwebtoken'

const payload = { username: 'johndoe' };
const secretKey = 'mysecretkey';
const tokenOptions = { expiresIn: '1h' };
const token = jwt.sign(payload, secretKey, tokenOptions);
