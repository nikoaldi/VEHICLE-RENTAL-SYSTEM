const db = require("../models");
const { motorcycle: Motorcycle } = db;
const { logger } = require("../utils/logger.js");

// Get all motorcycles
exports.getAll = (req, res) => {
  Motorcycle.findAll()
    .then((motorcycles) => {
      if (!motorcycles) return res.status(404).send({ message: "motorcycles not found." });
      else
        res.status(200).send({
          message: "motorcycles was fetched successfully.",
          data: motorcycles,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to fetch motorcycles. Please check application log.",
      });
    });
};

// Get motorcycle by ID
exports.getOne = (req, res) => {
  Motorcycle.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((motorcycle) => {
      if (!motorcycle) return res.status(404).send({ message: "Motorcycle not found." });
      else
        res.status(200).send({
          message: "Motorcycle was fetched successfully.",
          data: motorcycle,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      if (err.message.includes("invalid input syntax")) {
        res.status(404).send({
          message: "Motorcycle not found. Invalid ID.",
        });
      } else {
        res.status(500).send({
          message: "Failed to fetch Motorcycle. Please check application log.",
        });
      }
    });
};

// Create new motorcycle
exports.create = (req, res) => {
    Motorcycle.create(req.body)
      .then((motorcycle) => {
        res.status(201).send({
          message: "Motorcycle was created successfully.",
          data: motorcycle,
        });
      })
      .catch((error) => {
        logger.error(error.message);
        res.status(500).send({
          message: "Failed to create motorcycle. Please check application log.",
        });
      });
};

// Update motorcycle by ID
exports.update = (req, res) => {
  Motorcycle.update(req.body, { where: { id : req.params.id } })
    .then(([updated]) => {
      if (!updated) {
        return res.status(404).send({
          message: "Motorcycle not found.",
        });
      }
      res.status(200).send({
        message: "Motorcycle updated successfully.",
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res.status(500).send({
        message: "Failed to update motorcycle. Please check application log.",
      });
    });
};

// Delete motorcycle by ID
exports.delete = (req, res) => {
  Motorcycle.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((motorcycle) => {
      if (!motorcycle) return res.status(404).send({ message: "Motorcycle not found." });
      else
        res.status(200).send({
          message: "Motorcycle was deleted successfully.",
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to delete Motorcycle. Please check application log.",
      });
    });
};
  
  