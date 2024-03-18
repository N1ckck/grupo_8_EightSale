const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/editar-producto',adminController.form)

router.get("/crear-producto",adminController.create)
router.post("/crear-producto",adminController.store)
module.exports = router