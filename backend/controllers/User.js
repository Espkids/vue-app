const db = require('../util/database')
const User = db.user

const bcrypt = require('bcrypt')

exports.findAll = async (req, res) => {
  const result = await User.findAll()
  res.send(result)
}

exports.findOne = async (req, res) => {
  const id = req.params.id
  const result = await User.findByPk(id)
  res.send(result)
}

exports.create = async (req, res) => {
  const userData = req.body
  console.log(userData)
  await User.findAll({where: {username: userData.username}})
  .then(result => {
    if (result.length === 0) {
      bcrypt.hash(userData.password, 10, (err, hashPassword) => {
        if (err) {
          res.send({status: false, msg: 'Generate hash wrong! Try again later.'})
        } else {
          // console.log(hashPassword)
          userData.password = hashPassword
          User.create(userData)
            .then(result => {
              res.status(201).json({status: true, msg: 'Create user success.', item: result})
            })
            .catch(err => {
              res.send({status: false, msg: 'Create user fail.', err: err})
            })
        }
      })
    } else {
      res.send({status: false, msg : 'Username already in use.'})
    }
  })
  .catch(err => {
    res.send({status: false, msg: 'Fail to check username from DB', err: err})
  })
}