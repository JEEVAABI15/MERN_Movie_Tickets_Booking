const express = require('express')
const router = express.Router()

const {addNewUser, loginAdmin, loginUser} = require('../controllers/authController')

router.route('/signup').post(addNewUser)
router.route('/login').post(loginUser)
router.route('/adminlogin').post(loginAdmin)

module.exports = router