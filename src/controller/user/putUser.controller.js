import { cpfTreatment, date, mobileNumberTreatment } from "../../middleware/treatment.js";
import { user } from "../../model/model.js";
import bcrypt from "bcrypt"

// Define uma função assíncrona chamada `putUser` que será utilizada para atualizar as informações de um usuário existente.
async function putUser(req, res) {
    try {
        // Obtém o ID do usuário dos parâmetros da requisição (req.params)
        const { id } = req.params;

        // Obtém os novos dados do usuário do corpo da requisição (req.body)
        const { name, email, password, cpf, data_nascimento, telefone } = req.body;

        // Verifica se o ID foi fornecido
        if (!id) {
            return res.status(400).json({
                message: "ID do usuário é necessário.",
                status: 400
            });
        }

        // Busca o usuário no banco de dados pelo ID
        const userDB = await user.findByPk(id);

        // Se o usuário não for encontrado, retorna uma resposta de erro 404
        if (!userDB) {
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }
        console.log(">>>>>>", userDB.date_birth)
        // Atualiza os campos do usuário (apenas se fornecidos)
        
        userDB.name = name ? name : userDB.name
        
        userDB.email = email ? email : userDB.email
        
        userDB.cpf = cpf ? cpfTreatment(cpf) : userDB.cpf
        
        userDB.date_birth = data_nascimento ? date(data_nascimento) : userDB.date_birth;
        
        userDB.number_phone = telefone ? mobileNumberTreatment(telefone) : userDB.number_phone;

        // Se a senha for fornecida, criptografa a nova senha antes de atualizar
        if (password) {
            
            const hashedPassword = await bcrypt.hash(password, 10);
            userDB.password = hashedPassword;
        }

        // Salva as atualizações no banco de dados
        await userDB.save();

        // Retorna uma resposta de sucesso com os dados atualizados do usuário
        return res.status(200).json({
            message: "Usuário atualizado com sucesso.",
            user: userDB,
            status: 200
        });

    } catch (error) {
        // Se ocorrer qualquer erro durante a execução, ele será capturado e registrado no console com uma mensagem descritiva.
        console.error("Error in putUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao atualizar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default putUser;
