const router = require('express').Router();
const {User, List} = require('../db/models')

router.post('/' , async (req, res) => {
  const {userName, mentorName } = req.body
  await List.create({user: userName, mentor: mentorName, user_id: req.session.userId})
  res.sendStatus(200)
})


module.exports = router;
