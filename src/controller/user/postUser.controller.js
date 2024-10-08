import { user } from "../../model/model.js";
import bcrypt from 'bcrypt';

// Define uma função assíncrona chamada `postUser` que será utilizada para criar um novo usuário.
async function postUser(req, res) {
    try {
        // Obtém os dados do corpo da requisição (req.body)
        const { name, email, password, cpf, telefone, } = req.body;

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Preencha todos os campos obrigatórios: nome, email, senha.",
                status: 400
            });
        }

        // Verifica se o usuário já existe no banco de dados
        const existingUser = await user.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Usuário com este email já existe.",
                status: 409
            });
        }

        // Gera um hash para a senha usando bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Cria um novo usuário no banco de dados
        const newUser = await user.create({
            name,
            email,
            password: hashedPassword  // Armazena a senha criptografada
        });

        // Retorna uma resposta de sucesso com os dados do novo usuário
        return res.status(201).json({
            message: "Usuário criado com sucesso.",
            user: newUser,
            status: 201
        });

    } catch (error) {
        // Se ocorrer qualquer erro durante a execução, ele será capturado e registrado no console com uma mensagem descritiva.
        console.error("Error in postUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao criar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default postUser;
