const db = require("../models");
const { logger, combinedFormat } = require("./logger");



const init = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.sequelize.sync({ force: true });
      logger.info("Done syncing database.");
      resolve();
    } catch (err) {
      logger.error(`Error syncing database: ${err.message}`);
      reject(err);
    }
  });
};

module.exports = init;
