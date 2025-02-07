const cors = require("cors");
const express = require("express");
const dbSync = require("./utils/dbsync.js");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./utils/swagger.js").swaggerSpec;
const { logger, combinedFormat } = require("./utils/logger.js");

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
require("./routes/customer.routes.js")(app);
require("./routes/bike.route.js")(app);
require("./routes/motorcycle.route.js")(app);
require("./routes/car.route.js")(app);
require("./routes/rental.route.js")(app);

app.get("/", (request, response) => {
  response.json({ info: "Vehicle Rental System Server is running!" });
});

const startServer = async () => {

  const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development";
  console.log(`Starting server in "${env}" environment.`);

  try {
    if (process.env.NODE_ENV.trim() === "test") {
      console.log("Dropping and recreating tables.");
      await dbSync();
    } else {
      console.log("Skipping database sync");
    }

    // Start server
    const PORT = process.env.SERVER_PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });

    // deviceMonitoring.startWebSocket();
  } catch (error) {
    logger.error(`Failed to start the server: ${error.message}`);
    process.exit(1);
  }
};

startServer();

module.exports = app;
