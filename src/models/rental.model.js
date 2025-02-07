module.exports = (sequelize, Sequelize) => {
    const Rental = sequelize.define(
        "rental",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            rental_date : {
                type: Sequelize.DATE,
            },
            return_date: {
                type: Sequelize.DATE,
            },
            vehicle_id: {
                type: Sequelize.INTEGER,
            },
            vehicle_type: {
                type: Sequelize.STRING,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "customers", 
                    key: "id",
                },
            },
            total_cost: {
                type: Sequelize.DECIMAL,
            },
            status: {
                type: Sequelize.STRING,
            },
        },
        {
            tableName: "rentals",
        }
    );

    Rental.associate = (models) => {
        Rental.belongsTo(models.bike, {
            foreignKey: "vehicle_id",
            constraints: false,
            as: "bike",
        });
        Rental.belongsTo(models.motorcycle, {
            foreignKey: "vehicle_id",
            constraints: false,
            as: "motorcycle",
        });
        Rental.belongsTo(models.car, {
            foreignKey: "vehicle_id",
            constraints: false,
            as: "car",
        });
    };

    return Rental;
};
