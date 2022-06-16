const router = require('express').Router();
const { List } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const findListHr = (await List.findAll({ where: { user_id: res.locals.userId } })).map((el) => el.dataValues);
    res.json({ findListHr });
  })
module.exports = router;
