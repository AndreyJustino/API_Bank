import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

export const user = sequelize.define("User", {
    id: {
        type: DataTypes.UUIDV4, // Gera um identificador único no formato UUID (Versão 4).
        primaryKey: true, // Define a coluna `id` como chave primária.
        defaultValue: DataTypes.UUIDV4 // Gera um valor UUID automaticamente para novos registros.
    },
    name: {
        type: DataTypes.STRING, // Tipo STRING para armazenar o nome do usuário.
        allowNull: false // Não permite valores nulos (o nome é obrigatório).
    },
    email: {
        type: DataTypes.STRING, // Tipo STRING para armazenar o email do usuário.
        unique: true, // O email deve ser único, não pode haver dois usuários com o mesmo email.
        allowNull: false // O email é obrigatório.
    },
    password: {
        type: DataTypes.STRING, // Tipo STRING para armazenar a senha do usuário.
        allowNull: false // A senha é obrigatória.
    },
    cpf: {
        type: DataTypes.STRING, // Tipo STRING para armazenar o CPF do usuário.
        allowNull: false // O CPF é obrigatório.
    },
    date_birth: {
        type: DataTypes.DATEONLY, // Armazena apenas a data de nascimento no formato yyyy-mm-dd.
        allowNull: false // A data de nascimento é obrigatória.
    },
    number_phone: {
        type: DataTypes.STRING, // Tipo STRING para armazenar o número de telefone.
        allowNull: false // O número de telefone é obrigatório.
    }
}, {
    freezeTableName: true // Impede que o Sequelize pluralize o nome da tabela (o nome será exatamente "User").
});


export const accounts = sequelize.define("Accounts", {
    id: {
        type: DataTypes.UUIDV4, // ID único da conta, gerado automaticamente.
        primaryKey: true, // Define como chave primária.
        defaultValue: DataTypes.UUIDV4 // Valor UUID gerado automaticamente.
    },
    user_id: {
        type: DataTypes.UUIDV4, // Chave estrangeira, vinculada ao ID do usuário.
        references: {
            model: user, // Relaciona-se ao modelo `user`.
            key: "id" // Chave estrangeira é o campo `id` do modelo `user`.
        },
        allowNull: false // Não pode ser nulo, toda conta deve pertencer a um usuário.
    },
    type: {
        type: DataTypes.STRING, // Tipo da conta (corrente ou poupança).
        allowNull: false // O tipo da conta é obrigatório.
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2), // Saldo da conta, com precisão de até 10 dígitos e 2 casas decimais.
        allowNull: false // O saldo é obrigatório.
    }
}, {
    freezeTableName: true // Nome da tabela será "Accounts", sem pluralização.
});


export const transactions = sequelize.define("Transactions", {
    id: {
        type: DataTypes.UUIDV4, // ID único da transação.
        primaryKey: true, // Define como chave primária.
        defaultValue: DataTypes.UUIDV4 // Valor UUID gerado automaticamente.
    },
    account_id: {
        type: DataTypes.UUIDV4, // Chave estrangeira, vinculada ao ID da conta.
        references: {
            model: accounts, // Relaciona-se ao modelo `accounts`.
            key: "id" // Chave estrangeira é o campo `id` do modelo `accounts`.
        }
    },
    date_transacrions: {
        type: DataTypes.DATEONLY, // Data da transação no formato yyyy-mm-dd.
        allowNull: false // A data é obrigatória.
    },
    value: {
        type: DataTypes.DECIMAL(10, 2), // Valor da transação, com precisão de até 10 dígitos e 2 casas decimais.
        allowNull: false // O valor da transação é obrigatório.
    },
    type: {
        type: DataTypes.STRING, // Tipo da transação (depósito, saque ou transferência).
        allowNull: false // O tipo da transação é obrigatório.
    }
}, {
    freezeTableName: true // Nome da tabela será "Transactions", sem pluralização.
});
