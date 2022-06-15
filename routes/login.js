const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models')

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const {email, password} = req.body
  if (email && password) { 
    const user = await User.findOne({where: { email }})
    const checkPass = await bcrypt.compare(password, user.password)
    if (checkPass) {
      req.session.userId = user.id
      req.session.email = user.email
      req.session.name = user.name
      res.redirect('/mainPage')
    }
  }
});

module.exports = router;
