const controller = require("../controller/car.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API for managing Car
 */

// Get all car record
/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: List of cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   model:
 *                     type: string
 *                   color:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   engine_capacity:
 *                     type: string
 *                   passenger_capacity:
 *                     type: integer
 *                   license_plate:
 *                     type: string
 *                   rental_price:
 *                     type: number
 *                   availability_status:
 *                     type: string
 *       500:
 *         description: Error to get all cars
 */
app.get("/api/cars", controller.getAll);

// Find car record by ID
/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Get a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cars ID
 *     responses:
 *       200:
 *         description: List of cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   model:
 *                     type: string
 *                   color:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   engine_capacity:
 *                     type: string
 *                   passenger_capacity:
 *                     type: integer
 *                   license_plate:
 *                     type: string
 *                   rental_price:
 *                     type: number
 *                   availability_status:
 *                     type: string
 *       404:
 *         description: Cars not found
 *       500:
 *         description: Error to get car by ID
 */
app.get("/api/cars/:id", controller.getOne);

// Create new car record
/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Create a new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *               color:
 *                 type: string
 *               year:
 *                 type: integer
 *               engine_capacity:
 *                 type: string
 *               passenger_capacity:
 *                 type: integer
 *               license_plate:
 *                 type: string
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cars created successfully
 *       500:
 *         description: Server error
 */
app.post("/api/cars", controller.create);

// Update car record by ID
/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Update car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cars ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *               color:
 *                 type: string
 *               year:
 *                 type: integer
 *               engine_capacity:
 *                 type: string
 *               passenger_capacity:
 *                 type: integer
 *               license_plate:
 *                 type: string
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cars updated successfully
 *       404:
 *         description: Cars not found
 *       500:
 *         description: Error to update car
 */
app.put("/api/cars/:id", controller.update);

// Delete car record by ID
/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Cars deleted successfully
 *       404:
 *         description: Cars not found
 *       500:
 *         description: Error to delete car
 */
app.delete("/api/cars/:id", controller.delete);
};