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

router.route('/updateActor/:id').put(actorContoller.updateActorById);

router.route('/FindRecordById/:id').get(actorContoller.getFindRecordById);

module.exports = router;