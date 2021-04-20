const router = require('express').Router();
const open = require('./open/index');
const secure = require('./secure/index');

router.use('/api/user', open);
router.use('/api/user', secure);

module.exports = router;
