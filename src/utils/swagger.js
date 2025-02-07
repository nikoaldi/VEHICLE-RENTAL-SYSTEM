const swaggerJSDoc = require("swagger-jsdoc");
const version = require("../../package.json");

const address = "localhost"; // || process.env.SERVER_ADDRESS;

const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "Vehicle Rental System server API",
		...version,
		description: "Documentation for Vehicle Rental System server API",
	},
	servers: [
		{
			url: `http://${address}:8080`,
			description: "Development server",
		},
	],
};

const options = {
	swaggerDefinition,
	// Paths to files containing OpenAPI definitions
	apis: ['./src/routes/*.js'],
};

exports.swaggerSpec = swaggerJSDoc(options);