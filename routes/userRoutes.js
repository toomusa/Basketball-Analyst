const authController = require('./../controllers/authController');

router.post('/signup', authController.signup);