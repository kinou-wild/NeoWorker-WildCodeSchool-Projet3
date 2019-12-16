'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.belongsToMany(models.freelancer,{
        through: 'tj_users_f'
    })
    users.belongsToMany(models.missions,{
        through: 'tj_users_missions'
    })
  };
  return users;
};