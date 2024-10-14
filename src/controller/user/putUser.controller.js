import { cpfTreatment, date, mobileNumberTreatment } from "../../middleware/treatment.js";
import { user } from "../../model/model.js";
import bcrypt from "bcrypt"

async function putUser(req, res) {
    try {
        const { id } = req.params;

        const { name, email, password, cpf, data_nascimento, telefone } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "ID do usuário é necessário.",
                status: 400
            });
        }

        const userDB = await user.findByPk(id);

        if (!userDB) {
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }
        
        userDB.name = name ? name : userDB.name
        
        userDB.email = email ? email : userDB.email
        
        userDB.cpf = cpf ? cpfTreatment(cpf) : userDB.cpf
        
        userDB.date_birth = data_nascimento ? date(data_nascimento) : userDB.date_birth;
        
        userDB.number_phone = telefone ? mobileNumberTreatment(telefone) : userDB.number_phone;

        if (password) {
            
            const hashedPassword = await bcrypt.hash(password, 10);
            userDB.password = hashedPassword;
        }

        await userDB.save();

        return res.status(200).json({
            message: "Usuário atualizado com sucesso.",
            user: userDB,
            status: 200
        });

    } catch (error) {
        console.error("Error in putUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao atualizar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default putUser;
