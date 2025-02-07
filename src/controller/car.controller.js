const db = require("../models");
const { car: Car } = db;
const { logger } = require("../utils/logger.js");

// Get all cars
exports.getAll = (req, res) => {
  Car.findAll()
    .then((cars) => {
      if (!cars) return res.status(404).send({ message: "cars not found." });
      else
        res.status(200).send({
          message: "cars was fetched successfully.",
          data: cars,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to fetch cars. Please check application log.",
      });
    });
};

// Get car by ID
exports.getOne = (req, res) => {
  Car.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((car) => {
      if (!car) return res.status(404).send({ message: "Car not found." });
      else
        res.status(200).send({
          message: "Car was fetched successfully.",
          data: car,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      if (err.message.includes("invalid input syntax")) {
        res.status(404).send({
          message: "Car not found. Invalid ID.",
        });
      } else {
        res.status(500).send({
          message: "Failed to fetch Car. Please check application log.",
        });
      }
    });
};

// Create new car
exports.create = (req, res) => {
    Car.create(req.body)
      .then((car) => {
        res.status(201).send({
          message: "Car was created successfully.",
          data: car,
        });
      })
      .catch((error) => {
        logger.error(error.message);
        res.status(500).send({
          message: "Failed to create car. Please check application log.",
        });
      });
};

// Update car by ID
exports.update = (req, res) => {
  Car.update(req.body, { where: { id : req.params.id } })
    .then(([updated]) => {
      if (!updated) {
        return res.status(404).send({
          message: "Car not found.",
        });
      }
      res.status(200).send({
        message: "Car updated successfully.",
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res.status(500).send({
        message: "Failed to update car. Please check application log.",
      });
    });
};

// Delete car by ID
exports.delete = (req, res) => {
  Car.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((car) => {
      if (!car) return res.status(404).send({ message: "Car not found." });
      else
        res.status(200).send({
          message: "Car was deleted successfully.",
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to delete Car. Please check application log.",
      });
    });
};
  
  