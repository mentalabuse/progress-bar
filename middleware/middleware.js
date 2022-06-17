const checkSession = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
    res.locals.userName = req.session.name;
    res.locals.admin = req.session.admin;
    return next();
  }
  next();
};

const checkLogin = (req, res, next) => {
  if (req.session.userId) {
  return  next();
  }
  return res.redirect('/');
};

module.exports = {
  checkSession,
  checkLogin,
};
