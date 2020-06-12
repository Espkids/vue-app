// import lib
const express = require('express')
const db = require('../../util/database')
// define variable
const sequelize = db.sequelize
const User = db.user
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// login
route.post('/login', async (req, res, next) => {
  const userData = req.body
    await User.findAll({where: {username: userData.username}})
    .then(result => {
      if (result.length === 0) {
        res.send({status: false, msg: 'Username or password incorrect'})
      } else {
        bcrypt.compare(userData.password, result[0].password, (err, compareResult) => {
          if (err) {
            res.send({status: false, msg: 'Fail to compare password', err: err})
          } else {
            if (compareResult) {
              res.send({status: true, msg: 'Login success', user: result[0]})
            } else {
              res.send({status: false, msg: 'Username or password incorrect'})
            }
          }
        })
      }
    })
    .catch(err => {
      res.send({status: false, msg: 'Fail to check username from DB', err: err})
    })
})

module.exports = route