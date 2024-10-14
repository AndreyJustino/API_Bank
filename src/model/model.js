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
        type: DataTypes.DATEONLY,
        allowNull: false 
    },
    number_phone: {
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    freezeTableName: true 
});


export const accounts = sequelize.define("Accounts", {
    id: {
        type: DataTypes.UUIDV4, 
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4 
    },
    user_id: {
        type: DataTypes.UUIDV4,
        references: {
            model: user,
            key: "id" 
        },
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    freezeTableName: true
});


export const transactions = sequelize.define("Transactions", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4 
    },
    account_id: {
        type: DataTypes.UUIDV4, 
        allowNull: false,
        references: {
            model: accounts,
            key: "id" 
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE' 
    },
    date_transactions: {
        type: DataTypes.DATEONLY,
        allowNull: false 
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false 
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});
