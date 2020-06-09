// import lib
const express = require('express')
const db = require('../../util/database')
// define variable
const sequelize = db.sequelize
const User = db.user
const route = express.Router()
const bcrypt = require('bcrypt')

// get data
route.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    let data = {}
    if (id === -1) {
        data = await User.findAll()
    } else {
        data = await User.findByPk(id)
    }
    sequelize.close()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

//create row
route.post('/', async (req, res, next) => {
  const userData = req.body
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
              res.send({status: true, msg: 'Create user seccuss.', item: result})
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
})

//update row
route.put('/:id', async (req, res, next) => {
  const updateData = req.body
  const Id = Number(req.params.id)
  if (updateData && Id) {
    await User.findByPk(Id)
    .then(data => {
        data.update(updateData)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    })
    .catch(err => {
        res.json(err)
    })
  } else {
    res.send({ msg: 'select data to update', code: 0})
  }
})

//delete row
route.delete('/:id', async (req, res, next) => {
  const Id = Number(req.params.id)
  if (Id) {
    await User.findByPk(Id)
    .then(data => {
        data.destroy()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.send(err)
        })
    })
    .catch(err => {
        res.send(err)
    })
  } else {
    res.send({ msg: 'select data to delete', code: 0})
  }
})

module.exports = route