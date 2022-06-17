const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    const prettyUsers = JSON.parse(JSON.stringify(users));
    const newUsers = prettyUsers.filter(el => el.id != req.session.userId)
    res.render('users', { newUsers });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      employeeName,
      employeePassword,
      employeeMail,
      employeeRole,
    } = req.body;
    const hashPass = await bcrypt.hash(employeePassword, 10)
    await User.create(
      {
        name: employeeName,
        password: hashPass,
        email: employeeMail,
        admin: employeeRole,
      },
    );
    const user = await User.findOne({where: {email: employeeMail}})
    const prettyUser = JSON.parse(JSON.stringify(user))
    res.json(prettyUser.id);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeRole } = req.body;
    await User.update(
      {
        admin: employeeRole,
      },
      {
        where: { id },
      },
    );
    const userData = await User.findOne({ where: { id } });
    const { name, email } = userData.dataValues;
    res.json({ name, email });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
