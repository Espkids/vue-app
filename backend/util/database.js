const Sequelize = require('sequelize')
const env = require('./env')
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  operatorsAliases: false,
  connectionLimit: 20,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  waitForConnections: true,
  pool: {
    max: env.DB_MAX,
    min: env.DB_MIN,
    acquire: env.DB_ACQUIRE,
    idle: env.DB_IDLE
  }
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const disconnect =  (req, res, next) => {
  sequelize.close()
    .then(() => {
      console.log('Close successfully.')
      next()
    })
    .catch(err => {
      console.error('Unable to close database:', err)
      next()
    })
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//import model
db.user = require('../models/User.js')(sequelize, Sequelize)

module.exports = db
