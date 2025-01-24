
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

interface CustomerAttributes {
    id: number;
    mobile_number: string;
    attributes: {
        cadre?: boolean;
        isLPG?: boolean;
        isHousehold?: boolean;
        isDkrishi?: boolean;
    };
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type CustomerCreationAttributes = Optional<CustomerAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
    public id!: number;
    public mobile_number!: string;
    public attributes!: {
        cadre?: boolean;
        isLPG?: boolean;
        isHousehold?: boolean;
        isDkrishi?: boolean;
    };
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Customer.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attributes: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Customer",
        tableName: "customers",
        schema: "widgets-dashboard",
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

export default Customer;
