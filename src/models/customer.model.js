module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
    }, {
        tableName: "customers",
    });
    return Customer;
};
