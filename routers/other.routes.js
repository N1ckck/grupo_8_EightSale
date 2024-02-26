const express = require('express')
const router = express.Router()

const controller = require('../controllers')

const admin= require("../controllers/admin")

router.get("/crear-producto",admin.create)

router.get('/', controller.home)

module.exports = router