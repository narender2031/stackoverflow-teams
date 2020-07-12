const router = require('express').Router()
let Notifications = require('../models/notificationModel')

//GET all the notifications 
router.route('/').post((req, res) => {
    Notifications.find({usernameTagged : req.username})
        .then(notifications => res.json(notifications))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router