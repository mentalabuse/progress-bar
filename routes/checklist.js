const router = require('express').Router();
const {User, List} = require('../db/models')

router.get('/', async (req, res) => {
  
  const user = await User.findOne({where:{email:'admin@admin.com'}})
  const hr = {
    name: 'ALLa PAvlovna'
  }
  const list = await List.findAll();
  res.render('checklist',{user ,hr, list});
});

router.put('/:name' , async (req,res) => {
  
  let changeStatus;
  
  const takeBox = await List.findOne({ where: { user_id: req.body.id } });

    if (takeBox.req.params.name) {
      changeStatus = await takeBox.update({
        name: false,
      });
  
    } else {
      changeStatus = await takeBox.update({
        name: true,
      });
  return res.json(changeStatus);
    }
})


module.exports = router;
