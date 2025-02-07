const db = require("../models");
const { bike: Bike } = db;
const { logger } = require("../utils/logger.js");

// Get all bikes
exports.getAll = (req, res) => {
  Bike.findAll()
    .then((bikes) => {
      if (!bikes) return res.status(404).send({ message: "bikes not found." });
      else
        res.status(200).send({
          message: "bikes was fetched successfully.",
          data: bikes,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to fetch bikes. Please check application log.",
      });
    });
};

// Get bike by ID
exports.getOne = (req, res) => {
  Bike.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((bike) => {
      if (!bike) return res.status(404).send({ message: "Bike not found." });
      else
        res.status(200).send({
          message: "Bike was fetched successfully.",
          data: bike,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      if (err.message.includes("invalid input syntax")) {
        res.status(404).send({
          message: "Bike not found. Invalid ID.",
        });
      } else {
        res.status(500).send({
          message: "Failed to fetch Bike. Please check application log.",
        });
      }
    });
};

// Create new bike
exports.create = (req, res) => {
    Bike.create(req.body)
      .then((bike) => {
        res.status(201).send({
          message: "Bike was created successfully.",
          data: bike,
        });
      })
      .catch((error) => {
        logger.error(error.message);
        res.status(500).send({
          message: "Failed to create bike. Please check application log.",
        });
      });
};

// Update bike by ID
exports.update = (req, res) => {
  Bike.update(req.body, { where: { id : req.params.id } })
    .then(([updated]) => {
      if (!updated) {
        return res.status(404).send({
          message: "Bike not found.",
        });
      }
      res.status(200).send({
        message: "Bike updated successfully.",
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res.status(500).send({
        message: "Failed to update bike. Please check application log.",
      });
    });
};

// Delete bike by ID
exports.delete = (req, res) => {
  Bike.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((bike) => {
      if (!bike) return res.status(404).send({ message: "Bike not found." });
      else
        res.status(200).send({
          message: "Bike was deleted successfully.",
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to delete Bike. Please check application log.",
      });
    });
};
  
  