const controller = require("../controller/motorcycle.controller");
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
 *   name: Motorcycles
 *   description: API for managing Motorcycle
 */

// Get all motorcycle record
/**
 * @swagger
 * /api/motorcycles:
 *   get:
 *     summary: Get all motorcycles
 *     tags: [Motorcycles]
 *     responses:
 *       200:
 *         description: List of motorcycles
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
 *                   license_plate:
 *                     type: string
 *                   rental_price:
 *                     type: number
 *                   availability_status:
 *                     type: string
 *       500:
 *         description: Error to get all motorcycles
 */
app.get("/api/motorcycles", controller.getAll);

// Find motorcycle record by ID
/**
 * @swagger
 * /api/motorcycles/{id}:
 *   get:
 *     summary: Get a motorcycle by ID
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Motorcycles ID
 *     responses:
 *       200:
 *         description: List of motorcycles
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
 *                   license_plate:
 *                     type: string
 *                   rental_price:
 *                     type: number
 *                   availability_status:
 *                     type: string
 *       404:
 *         description: Motorcycles not found
 *       500:
 *         description: Error to get motorcycle by ID
 */
app.get("/api/motorcycles/:id", controller.getOne);

// Create new motorcycle record
/**
 * @swagger
 * /api/motorcycles:
 *   post:
 *     summary: Create a new motorcycle
 *     tags: [Motorcycles]
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
 *               license_plate:
 *                 type: string
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Motorcycles created successfully
 *       500:
 *         description: Server error
 */
app.post("/api/motorcycles", controller.create);

// Update motorcycle record by ID
/**
 * @swagger
 * /api/motorcycles/{id}:
 *   put:
 *     summary: Update a motorcycle
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Motorcycles ID
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
 *               license_plate:
 *                 type: string
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Motorcycles updated successfully
 *       404:
 *         description: Motorcycles not found
 *       500:
 *         description: Error to update motorcycle
 */
app.put("/api/motorcycles/:id", controller.update);

// Delete motorcycle record by ID
/**
 * @swagger
 * /api/motorcycles/{id}:
 *   delete:
 *     summary: Delete a motorcycle
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Motorcycle ID
 *     responses:
 *       200:
 *         description: Motorcycles deleted successfully
 *       404:
 *         description: Motorcycles not found
 *       500:
 *         description: Error to delete motorcycle
 */
app.delete("/api/motorcycles/:id", controller.delete);
};