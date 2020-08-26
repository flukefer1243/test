module.exports = (sequelize, DataTypes) => {
    const Human = sequelize.define('Human', {
    firstname: DataTypes.STRING,
    lastname : DataTypes.STRING,
    })
    return Human
   }