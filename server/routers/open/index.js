const router = require('express').Router();
const createUser = require('../../controllers/open/createUser');

router.post('/', createUser);

module.exports = router;
