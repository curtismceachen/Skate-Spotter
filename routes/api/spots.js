const express = require('express');
const router = express.Router()
const spotCtrl = require('../../controllers/api/spots');
const multer = require("multer")
const upload = multer({ dest: 'uploads/'})


router.get("/", spotCtrl.index)
router.use(require('../../config/auth'))
router.post("/", upload.single('image'), spotCtrl.create)
router.put("/:id", spotCtrl.update)
router.delete("/:id", spotCtrl.delete)



module.exports = router