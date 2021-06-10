const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function isAuthenticated (req, res, next) {
  try {
    const bearerHeader = req.headers.authorization;

    if (bearerHeader) {
      let bearer = bearerHeader.split(' ')[0];
      let token = bearerHeader.split(' ')[1];
      if (bearer == 'Bearer' && token) {
        try {
          let decoded = jwt.verify(token, process.env.SECRET);
          const user = await User.findOne({
            where: {
              id: decoded.id
            }
          });
          
          if (user) {
            req.decoded = decoded.id;
            return next();
          } else {
            return next({
              status: 401,
              name: 'Unauthorized',
              message: 'Please register first'
            });
          }
        } catch (err) {
          return next(err);
        }
      } else {
        return next({
          status: 401,
          name: 'Unauthorized',
          message: 'Invalid bearer token format'
        });
      }
    } else {
      return next({
        status: 401,
        name: 'Unauthorized',
        message: 'Please login first'
      });
    }
  } catch (err) {
    return next(err);
  } 
}

module.exports = {
  isAuthenticated
};