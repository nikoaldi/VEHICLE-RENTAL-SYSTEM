const db = require("../models/index.js");
const { customer: Customer } = db;
const { logger } = require("../utils/logger.js");

// Get all customers
exports.getAll = (req, res) => {
  Customer.findAll()
    .then((customers) => {
      if (!customers) return res.status(404).send({ message: "customers not found." });
      else
        res.status(200).send({
          message: "customers was fetched successfully.",
          data: customers,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to fetch customers. Please check application log.",
      });
    });
};

// Get customer by ID
exports.getOne = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((customer) => {
      if (!customer) return res.status(404).send({ message: "Customer not found." });
      else
        res.status(200).send({
          message: "Customer was fetched successfully.",
          data: customer,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      if (err.message.includes("invalid input syntax")) {
        res.status(404).send({
          message: "Customer not found. Invalid ID.",
        });
      } else {
        res.status(500).send({
          message: "Failed to fetch Customer. Please check application log.",
        });
      }
    });
};

// Create new customer
exports.create = (req, res) => {
    Customer.create(req.body)
      .then((customer) => {
        res.status(201).send({
          message: "Customer was created successfully.",
          data: customer,
        });
      })
      .catch((error) => {
        logger.error(error.message);
        res.status(500).send({
          message: "Failed to create customer. Please check application log.",
        });
      });
};

// Update customer by ID
exports.update = (req, res) => {
  Customer.update(req.body, { where: { id : req.params.id } })
    .then(([updated]) => {
      if (!updated) {
        return res.status(404).send({
          message: "Customer not found.",
        });
      }
      res.status(200).send({
        message: "Customer updated successfully.",
      });
    })
    .catch((error) => {
      logger.error(error.message);
      res.status(500).send({
        message: "Failed to update customer. Please check application log.",
      });
    });
};

// Delete customer by ID
exports.delete = (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((customer) => {
      if (!customer) return res.status(404).send({ message: "Customer not found." });
      else
        res.status(200).send({
          message: "Customer was deleted successfully.",
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to delete Customer. Please check application log.",
      });
    });
};
  
  