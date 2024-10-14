import { cpfTreatment, date, mobileNumberTreatment } from "../../middleware/treatment.js";
import { user } from "../../model/model.js";
import bcrypt from 'bcrypt';

async function postUser(req, res) {
    try {
        const { name, email, password, cpf, data_nascimento, telefone } = req.body;

        if (!name || !email || !password || !cpf || !data_nascimento || !telefone){
            return res.status(400).json({
                message: "Preencha todos os campos obrigatórios: nome, email, senha.",
                status: 400
            });
        }

        const existingUser = await user.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Usuário com este email já existe.",
                status: 409
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            name,
            email,
            password: hashedPassword,
            cpf: cpfTreatment(cpf),
            date_birth: date(data_nascimento),
            number_phone: mobileNumberTreatment(telefone)
        });

        return res.status(201).json({
            message: "Usuário criado com sucesso.",
            user: newUser,
            status: 201
        });

    } catch (error) {
        console.error("Error in postUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao criar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default postUser;
