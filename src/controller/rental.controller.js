const db = require("../models");
const { rental: Rental } = db;
const { logger } = require("../utils/logger.js");

// Get all rentals
exports.getAll = (req, res) => {
  Rental.findAll()
    .then((rentals) => {
      if (!rentals) return res.status(404).send({ message: "rentals not found." });
      else
        res.status(200).send({
          message: "rentals was fetched successfully.",
          data: rentals,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to fetch rentals. Please check application log.",
      });
    });
};

// Get rental by ID
exports.getOne = (req, res) => {
  Rental.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((rental) => {
      if (!rental) return res.status(404).send({ message: "Rental not found." });
      else
        res.status(200).send({
          message: "Rental was fetched successfully.",
          data: rental,
        });
    })
    .catch((err) => {
      logger.error(err.message);
      if (err.message.includes("invalid input syntax")) {
        res.status(404).send({
          message: "Rental not found. Invalid ID.",
        });
      } else {
        res.status(500).send({
          message: "Failed to fetch Rental. Please check application log.",
        });
      }
    });
};

// Create new rental
exports.create = async  (req, res) => {
    const { rental_date, return_date, vehicle_id, vehicle_type, customer_id, total_cost, status} = req.body;
    const transaction = await db.sequelize.transaction();
    try {
        const date1 = new Date(rental_date);
        const date2 = new Date(return_date);
        const differenceInMilliseconds = date2 - date1;
        const differenceInDays = Math.round((differenceInMilliseconds / (1000 * 60 * 60)) / 24);
        const price = total_cost * differenceInDays;
        const newRental = await Rental.create(
            {
                rental_date: rental_date,
                return_date: return_date,
                vehicle_id: vehicle_id,
                vehicle_type: vehicle_type,
                customer_id: customer_id,
                total_cost: total_cost,
                status : status
            },
            { transaction }
        );
        if (!newRental) {
            throw new Error("Failed to create Rental.");
        }
        await transaction.commit();
        res.status(201).send({
            message: "Rental was created successfully..",
            data: newRental,
        });
    } catch (error) {
        await transaction.rollback();

        console.error(error.message);
        res.status(500).send({
            message: "Failed to create rental. Please check application log.",
            error: error.message,
        });
    }    
};

// Update rental by ID
exports.update = async (req, res) => {
    const { id } = req.params;
    const { rental_date, return_date, vehicle_id, vehicle_type, total_cost, status} = req.body;
    const transaction = await db.sequelize.transaction();

    try {
        const date1 = new Date(rental_date);
        const date2 = new Date(return_date);
        const differenceInMilliseconds = date2 - date1;
        const differenceInDays = Math.round((differenceInMilliseconds / (1000 * 60 * 60)) / 24);
        const price = total_cost * differenceInDays;

        const RentalUpdate = await Rental.findOne({
            where: { id }
        });

        await RentalUpdate.update(
            {
                rental_date: rental_date,
                return_date: return_date,
                vehicle_id: vehicle_id,
                vehicle_type: vehicle_type,
                total_cost: price,
                status : status
            },
            { transaction }
        );
        
        await transaction.commit();

        res.status(201).send({
            message: "Rental was updated successfully",
            data: RentalUpdate,
        });
    } catch (error) {
        await transaction.rollback();

        console.error(error.message);
        res.status(500).send({
            message: "Failed to update rental. Please check application log.",
            error: error.message,
        });
    }    
};

// Delete rental by ID
exports.delete = (req, res) => {
  Rental.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rental) => {
      if (!rental) return res.status(404).send({ message: "Rental not found." });
      else
        res.status(200).send({
          message: "Rental was deleted successfully.",
        });
    })
    .catch((err) => {
      logger.error(err.message);
      res.status(500).send({
        message: "Failed to delete Rental. Please check application log.",
      });
    });
};
  
  