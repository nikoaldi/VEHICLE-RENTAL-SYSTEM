module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        model: {
            type: Sequelize.STRING,
        },
        color: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        engine_capacity: {
            type: Sequelize.STRING,
        },
        passenger_capacity: {
            type: Sequelize.STRING,
        },
        license_plate: {
            type: Sequelize.STRING,
        },
        rental_price: {
            type: Sequelize.STRING,
        },
        availability_status : {
            type: Sequelize.STRING,
        },
    }, {
        tableName: "cars",
    });
    return Car;
};
