import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

interface AnnaCanteenAttributes {
    id: number;
    mobile_number: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type AnnaCanteenCreationAttributes = Optional<AnnaCanteenAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

class AnnaCanteen extends Model<AnnaCanteenAttributes, AnnaCanteenCreationAttributes> implements AnnaCanteenAttributes {
    public id!: number;
    public mobile_number!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

AnnaCanteen.init(
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
        modelName: "AnnaCanteen",
        tableName: "anna_canteen",
        schema: "widgets-dashboard",
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

export default AnnaCanteen;