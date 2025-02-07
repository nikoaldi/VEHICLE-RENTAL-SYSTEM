const controller = require("../controller/bike.controller");
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
 *   name: Bikes
 *   description: API for managing Bike
 */

// Get all bike record
/**
 * @swagger
 * /api/bikes:
 *   get:
 *     summary: Get all bikes
 *     tags: [Bikes]
 *     responses:
 *       200:
 *         description: List of bikes
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
 *                   rental_price:
 *                     type: number
 *                   availability_status:
 *                     type: string
 *       500:
 *         description: Error to get all bikes
 */
app.get("/api/bikes", controller.getAll);

// Find bike record by ID
/**
 * @swagger
 * /api/bikes/{id}:
 *   get:
 *     summary: Get a bike by ID
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Bikes ID
 *     responses:
 *       200:
 *         description: Bikes details
 *       404:
 *         description: Bikes not found
 *       500:
 *         description: Error to get bike by ID
 */
app.get("/api/bikes/:id", controller.getOne);

// Create new bike record
/**
 * @swagger
 * /api/bikes:
 *   post:
 *     summary: Create a new bike
 *     tags: [Bikes]
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
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bikes created successfully
 *       500:
 *         description: Server error
 */
app.post("/api/bikes", controller.create);

// Update bike record by ID
/**
 * @swagger
 * /api/bikes/{id}:
 *   put:
 *     summary: Update a bike
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bikes ID
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
 *               rental_price:
 *                 type: number
 *               availability_status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bikes updated successfully
 *       404:
 *         description: Bikes not found
 *       500:
 *         description: Error to update bike
 */
app.put("/api/bikes/:id", controller.update);

// Delete bike record by ID
/**
 * @swagger
 * /api/bikes/{id}:
 *   delete:
 *     summary: Delete a bike
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bike ID
 *     responses:
 *       200:
 *         description: Bikes deleted successfully
 *       404:
 *         description: Bikes not found
 *       500:
 *         description: Error to delete bike
 */
app.delete("/api/bikes/:id", controller.delete);
};