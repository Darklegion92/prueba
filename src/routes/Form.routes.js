const express = require('express')
const router = express.Router()
const { createForm } = require('../controllers/form.controller')
router.get('/', (req, res) => {
    res.render('form')
})
    .post('/', createForm)

module.exports = router;