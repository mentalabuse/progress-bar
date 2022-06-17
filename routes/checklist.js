const router = require('express').Router();
const {User, List} = require('../db/models')

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const list = await List.findOne({where: { id }});
  const newList = JSON.parse(JSON.stringify(list))
  res.render('checklist', newList );
});

router.put('/:id/:name/:val' , async (req, res) => {
  const {id} = req.params
  const takeBox = await List.findOne({where: { id }});
  const {name, val} = req.params
      await takeBox.update({
        [name]: val
      });

  return res.sendStatus(200);
    
})


module.exports = router;
