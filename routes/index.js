const router = require('express').Router();
const {User, List} = require('../db/models')

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/mainPage',async (req, res) => {
  const lists = await List.findAll()
  res.render('mainPage', {lists});
});

router.delete('/mainPage/:id', async (req, res) => {
  const {id} = req.params
  await List.destroy({where: {id}})
  res.sendStatus(200)
})

module.exports = router;
