const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const extractToken = (req) => req.header('x-auth-token');

exports.isAuthenticated = (req, res, next) => {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

exports.isAdmin = async (req, res, next) => {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ msg: 'Access denied, you do not have the required permissions' });
    }
  } catch (err) {
    console.error('Error in isAdmin middleware:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
