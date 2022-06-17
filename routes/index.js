const router = require('express').Router();
const {User, List} = require('../db/models')
const { checkSession, checkLogin } = require('../middleware/middleware');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/mainPage',checkLogin, async ( req, res) => {
  const lists = await List.findAll()
  lists.forEach(el => {
    const pretty = JSON.parse(JSON.stringify(el))
    let total = 0
    for (let key in pretty) {
      if (pretty[key] != false && pretty[key] != '' && pretty[key] != null) {
        total++
      }
    }
    let precent = +(((total-6)/13)*100).toFixed()
    el.precent = precent || 0
  });
  res.render('mainPage', {lists });
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
