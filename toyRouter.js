const express = require('express')

const router = express.Router()


// Write all my endpoints for this route

router.get('', function(req, res, next) {
    res.send("Toys!")
})

router.get('/new', function(req, res, next) {
    res.send("New Toys!")
})

module.exports = router;