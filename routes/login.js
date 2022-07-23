const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models')

router.post('/', async (req, res) => {
  const {email, password} = req.body
  if (email && password) { 
    const user = await User.findOne({where: { email }})
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password)
      if (checkPass) {
        req.session.userId = user.id
        req.session.email = user.email
        req.session.name = user.name
        req.session.admin = user.admin
        res.redirect('/mainPage')
      }
      else {
        res.redirect('/')
      }
    }
  }
});

module.exports = router;
