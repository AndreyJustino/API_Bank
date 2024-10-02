import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

export const user = sequelize.define("User", {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_birth: {
            type: DataTypes.DATEONLY, //yyyy-mm-dd
            allowNull: false
        },
        number_phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        freezeTableName: true
    }
)

export const accounts = sequelize.define("Accounts",{
    id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    user_id:{
        type: DataTypes.UUIDV4,
        references: {
            model: user,
            key:"id"
        },
        allowNull: false
    },
    type: { //corrente ou poupança
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
    },
    {
        freezeTableName: true
    }
)

export const transactions = sequelize.define("Transactions", {
    id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    account_id: {
        type: DataTypes.UUIDV4,
        references: {
            model: accounts,
            key: "id"
        },
    },
    date_transacrions: {
        type: DataTypes.DATEONLY, //yyyy-mm-dd
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    type: { //depósito, saque, transferência
        type: DataTypes.STRING,
        allowNull: false
    }
    }, 
    {
        freezeTableName: true
    }
)