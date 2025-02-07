module.exports = (sequelize, Sequelize) => {
    const Motorcycle = sequelize.define("motorcycle", {
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
        tableName: "motorcycles",
    });
    return Motorcycle;
};
