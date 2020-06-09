module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'trn_user',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING
        },
        username: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    )
    return User
}