const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')

router.post('/logKeyword', controller.keyword)
router.post('/logArticle', controller.article)


module.exports = router