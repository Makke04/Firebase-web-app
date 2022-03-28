const express = require('express')
const router = express.Router()
const {index} = require('../conifg/router')

router.get('/', index)

module.exports = router