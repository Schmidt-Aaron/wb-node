const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out!');
  res.redirect('/');
}

exports.isLoggedIn = (req, res, next) => {
  //check if authenicated
  if(req.isAuthenticated()) {
    next(); //all is well -- move along
    return;
  }
  req.flash('error', 'Opps you must be logged in');
  res.redirect('/login');
}