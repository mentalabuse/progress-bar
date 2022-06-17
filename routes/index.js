const router = require('express').Router();
const {User, List} = require('../db/models')
const { checkSession, checkLogin } = require('../middleware/middleware');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/mainPage',checkLogin, async ( req, res) => {
  const lists = await List.findAll()
  return  res.render('mainPage', {lists});
});

router.delete('/mainPage/:id', async (req, res) => {
  const {id} = req.params
  await List.destroy({where: {id}})
  res.sendStatus(200)
});

router.post('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.clearCookie('sID').json();
    }
  });
})

module.exports = router;
