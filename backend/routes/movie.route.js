let router = require('express').Router();
let movieController = require('../controllers/movies.controller');

router.get('/',(req,res)=>{
res.json({
    status:'Movies API is working',
    message:'Welcome to RestHub'
});
});

router.route('/getList').get(movieController.getList);
router.route('/createMovie').post(movieController.createMovie);
module.exports = router;