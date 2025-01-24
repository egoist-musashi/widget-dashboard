import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

interface UserAttributes {
    id: number;
    name: string;
    mobile_number: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type UserCreationAttributes = Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public mobile_number!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                name: "unique_mobile_number",
                msg: "Mobile number must be unique.",
            },
            validate: {
                notEmpty: {
                    msg: "Contact No is required it cannot be empty",
                },
                isNumeric: {
                    msg: "Contact No must only contain numeric values",
                },
                len: {
                    args: [10, 10],
                    msg: "Contact No must be 10 characters long",
                }
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Passwords cannot be empty',
                },
                len: {
                    args: [8, 100],
                    msg: 'Passwords must be at least 8 characters long',
                },
            },
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        schema: "widgets-dashboard",
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

export default User;
