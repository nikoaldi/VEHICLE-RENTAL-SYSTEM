module.exports = (sequelize, Sequelize) => {
    const Bike = sequelize.define("bike", {
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
        rental_price: {
            type: Sequelize.STRING,
        },
        availability_status : {
            type: Sequelize.STRING,
        },
    }, {
        tableName: "bikes",
    });
    return Bike;
};
