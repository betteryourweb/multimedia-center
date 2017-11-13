'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require('../../config/sequelize.json')[env]
const db = {}
let sequelize
// console.log({config}, process.env[config.use_env_variable])
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}
console.log(__dirname)
fs
  .readdirSync(__dirname)
  .filter(file => {
    console.log({file})
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    let filepath = path.resolve(__dirname, file)
    const model = sequelize['import'](filepath)
    db[model.name] = model
    // console.log({filepath, model, db})
  })

Object.keys(db).forEach(modelName => {
  // console.log({db})
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
