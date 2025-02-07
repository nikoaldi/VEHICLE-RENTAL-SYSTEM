const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  logging: console.log, //false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("../models/customer.model.js")(sequelize, Sequelize);
db.bike = require("../models/bike.model.js")(sequelize, Sequelize);
db.motorcycle = require("../models/motorcycle.model.js")(sequelize, Sequelize);
db.car = require("../models/car.model.js")(sequelize, Sequelize);
db.rental = require("../models/rental.model.js")(sequelize, Sequelize);

// Add associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

module.exports = db;
