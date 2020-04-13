let router = require('express').Router();
let actorContoller = require('../controllers/actor.contoller');



router.get('/', (req, res) => {
    res.json({
        status: ' Actor API is working',
        message: 'Welcome to RestHub'
    });
});

router.route('/getList').get(actorContoller.getList);

router.route('/createActor').post(actorContoller.createNode);

router.route('/deleteActors/:id').delete(actorContoller.deleteActorById);

module.exports = router;