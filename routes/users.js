const router = require('express').Router();
const { User } = require('../db/models');

// роутер /users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('users', { users });
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
    await User.create(
      {
        name: employeeName,
        password: employeePassword,
        email: employeeMail,
        admin: employeeRole,
      },
    );
    res.sendStatus(200);
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
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
