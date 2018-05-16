const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');

// const User = require('../users/User');

// const secret = 'that is what I shared yesterday lol';

// const localStrategy = newLocalStrategy(function(username, password, done) {
//   User.findOne({username}).then(user => {
//     if(!user) {
//       done(null, false);
//     } else {
//       user
//         .validatePassword(password)
//         .then(isValid => {
//           const { _id, username } = user;
//           return done(null, { _id, username });
//         })
//         .catch(err => {
//           return done(err);
//         });
//     }
//   }).catch(err => done(err))
// });

router.post('/register', function(req, res) {
  // console.log('posting', req.body);
  User.create(req.body) // new User + user.save
    .then(user => {
      const token = makeToken(user);
      res.status(201).json({ user, token });
    })
    .catch(err => res.status(500).json(err));
});

// router.post('/login', authenticate, (req, res) => {

// });

// function makeToken(user) {
//   // build that token
//   const timestamp = new Date().getTime();
//   const payload = {
//     sub: user._id,
//     iat: timestamp,
//     username: user.username,
//   };
//   const options = {
//     expiresIn: '24h',
//   };

//   return jwt.sign(payload, secret, options)
// }

module.exports = router;
