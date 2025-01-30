import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

interface FertilizersAttributes {
    id: number;
    mobile_number: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type FertilizersCreationAttributes = Optional<FertilizersAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

class Fertilizers extends Model<FertilizersAttributes, FertilizersCreationAttributes> implements FertilizersAttributes {
    public id!: number;
    public mobile_number!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Fertilizers.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Mobile No is required it cannot be empty",
                },
                isNumeric: {
                    msg: "Mobile No must only contain numeric values",
                },
                len: {
                    args: [10, 10],
                    msg: "Mobile No must be 10 characters long",
                }
            },
        },
    },
    {
        sequelize,
        modelName: "Fertilizers",
        tableName: "fertilizers",
        schema: "widgets-dashboard",
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

export default Fertilizers;