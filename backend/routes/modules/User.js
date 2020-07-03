// import lib
const express = require('express')
const route = express.Router()

const user = require('../../controllers/User')

// get all user
route.get('/', user.findAll)

// get user by id
route.get('/:id', user.findOne)

//create row
route.post('/', user.create)

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

// get parameter from query --> http://localhost:8000/api/user/test/?search=asdsadsad
// route.post('/test', async (req, res, next) => {
//   const data = req.query
//   res.send(data)
// })

module.exports = route