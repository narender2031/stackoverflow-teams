const router = require('express').Router()
let Notifications = require('../models/notificationModel')

//GET all the notifications 
router.route('/').post((req, res) => {
    Notifications.find({usernameTagged : req.username, readStatus : false})
        .then(notifications => res.json(notifications))
        .catch(err => res.status(400).json({ error : err}))
})

//GET all the notifications 
router.route('/markAllRead').post((req, res) => {
    Notifications.find({usernameTagged : req.username})
        .then(notificationsArray => {
            notificationsArray.forEach(notification => {
                notification.readStatus = true

                notification.save()
                    .then(() => {})
                    .catch(err => res.status(400).json({ error : err}))
            })
        })
        .catch(err => res.status(400).json({ error : err}))
})
module.exports = router