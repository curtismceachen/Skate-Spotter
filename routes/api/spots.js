const express = require('express');
const router = express.Router()
const spotCtrl = require('../../controllers/api/spots');

router.get("/", spotCtrl.index)
router.use(require('../../config/auth'))
router.post("/", spotCtrl.create)


module.exports = router