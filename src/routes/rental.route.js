const controller = require("../controller/rental.controller");
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
 *   name: Rentals
 *   description: API for managing Rental
 */

// Get all rental record
/**
 * @swagger
 * /api/rentals:
 *   get:
 *     summary: Get all rentals
 *     tags: [Rentals]
 *     responses:
 *       200:
 *         description: List of rentals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   rental_date:
 *                     type: string
 *                   return_date:
 *                     type: string
 *                   vehicle_id:
 *                     type: integer
 *                   vehicle_type:
 *                     type: string
 *                   customer_id:
 *                     type: integer
 *                   total_cost:
 *                     type: number
 *                   status:
 *                     type: string
 *       500:
 *         description: Error to get all rentals
 */
app.get("/api/rentals", controller.getAll);

// Find rental record by ID
/**
 * @swagger
 * /api/rentals/{id}:
 *   get:
 *     summary: Get a rental by ID
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rentals ID
 *     responses:
 *       200:
 *         description: List of rentals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   rental_date:
 *                     type: string
 *                   return_date:
 *                     type: string
 *                   vehicle_id:
 *                     type: integer
 *                   vehicle_type:
 *                     type: string
 *                   customer_id:
 *                     type: integer
 *                   total_cost:
 *                     type: number
 *                   status:
 *                     type: string
 *       404:
 *         description: Rentals not found
 *       500:
 *         description: Error to get rental by ID
 */
app.get("/api/rentals/:id", controller.getOne);

// Create new rental record
/**
 * @swagger
 * /api/rentals:
 *   post:
 *     summary: Create a new rental
 *     tags: [Rentals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rental_date:
 *                 type: string
 *               return_date:
 *                 type: string
 *               vehicle_id:
 *                 type: integer
 *               vehicle_type:
 *                 type: string
 *               customer_id:
 *                 type: integer
 *               total_cost:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Rentals created successfully
 *       500:
 *         description: Server error
 */
app.post("/api/rentals", controller.create);

// Update rental record by ID
/**
 * @swagger
 * /api/rentals/{id}:
 *   put:
 *     summary: Update a rental
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rentals ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rental_date:
 *                 type: string
 *               return_date:
 *                 type: string
 *               vehicle_id:
 *                 type: integer
 *               vehicle_type:
 *                 type: string
 *               customer_id:
 *                 type: integer
 *               total_cost:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rentals updated successfully
 *       404:
 *         description: Rentals not found
 *       500:
 *         description: Error to update rental
 */
app.put("/api/rentals/:id", controller.update);

// Delete rental record by ID
/**
 * @swagger
 * /api/rentals/{id}:
 *   delete:
 *     summary: Delete a rental
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rental ID
 *     responses:
 *       200:
 *         description: Rentals deleted successfully
 *       404:
 *         description: Rentals not found
 *       500:
 *         description: Error to delete rental
 */
app.delete("/api/rentals/:id", controller.delete);
};