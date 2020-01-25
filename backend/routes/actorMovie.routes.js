let router = require('express').Router();
let actrMveController = require('../controllers/actor-mvs.controller');

router.get('/', (req, res) => {
    res.json({
        status: ' ActorMovie API is working',
        message: 'Welcome to RestHub'
    });
});

router.route('/createActrMve').post(actrMveController.createActrProd);
module.exports = router;