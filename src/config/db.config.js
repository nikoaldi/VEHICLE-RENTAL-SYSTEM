require('dotenv').config()

const env = process.env.NODE_ENV || "development";
let config = {
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
if (env === "test") {
	config = {
		...config,
		HOST: process.env.DB_HOST_TEST,
		USER: process.env.DB_USER_TEST,
		PASSWORD: process.env.DB_PASSWORD_TEST,
		DB: process.env.DB_DATABASE_TEST,
	};
} else {
	config = {
		...config,
		HOST: process.env.DB_HOST,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
		DB: process.env.DB_DATABASE,
	};
}

if (config.DB === undefined) {
	throw new Error(
		"DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE is not defined"
	);
}

module.exports = config;

