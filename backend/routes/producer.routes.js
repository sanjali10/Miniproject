const router = require('express').Router();
const producerController = require('../controllers/producer.controller');



router.get('/', (req, res) => {
    res.json({
        status: 'Producer API is working',
        message: 'Welcome to RestHub'
    });
})
router.route('/getList').get(producerController.getList);
router.route('/createProducer').post(producerController.createProducer);
module.exports = router;