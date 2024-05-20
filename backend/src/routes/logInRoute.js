const express = require('express')
const router = express.Router()
const {loginUser, loginAdmin} = require('../controllers/loginControllers')
router.route('/').post(loginUser)
router.route('/admin').post(loginAdmin)

module.exports = router