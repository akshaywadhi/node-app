const express = require('express')
const users = require('../Controller/user')

const router = express.Router()


router
.get('/', users.getUser)
.post('/add', users.addUser)
.patch('/update/:id',users.updateUser)
.post('/findUser', users.findUser)
.delete('/remove/:id', users.removeUser);


exports.router = router