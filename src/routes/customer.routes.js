const controller = require("../controller/customer.controller");
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
 *   name: Customers
 *   description: API for managing Customer
 */

// Get all customer record
/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *       500:
 *         description: Error to get all customers
 */
app.get("/api/customers", controller.getAll);

// Find customer record by ID
/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customers ID
 *     responses:
 *       200:
 *         description: Customers details
 *       404:
 *         description: Customers not found
 *       500:
 *         description: Error to get customer by ID
 */
app.get("/api/customers/:id", controller.getOne);

// Create new customer record
/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customers created successfully
 *       500:
 *         description: Server error
 */
app.post("/api/customers", controller.create);

// Update customer record by ID
/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customers ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customers updated successfully
 *       404:
 *         description: Customers not found
 *       500:
 *         description: Error to update customer
 */
app.put("/api/customers/:id", controller.update);

// Delete customer record by ID
/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customers ID
 *     responses:
 *       200:
 *         description: Customers deleted successfully
 *       404:
 *         description: Customers not found
 *       500:
 *         description: Error to delete customer
 */
app.delete("/api/customers/:id", controller.delete);
};