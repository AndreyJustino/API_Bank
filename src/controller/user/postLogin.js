import { user } from "../../model/model.js";
import { compare } from "bcrypt";

async function postLogin(req,res) {
    try{
        const {email, password} = req.body
        
        const userInput = await user.findOne({
            where: { email }
        })

        if(!userInput){
            return res.status(404).json({
                message: "Usuario não encontrado.",
                status: 404
            })
        }

        const validarPassword = await compare(password, userInput.password)

        if(!validarPassword){
            return res.status(401).json({
                message: "Senha inválida.",
                status: 401
            })
        }

        res.status(200).json({
            message: "Login autorizado.",
            login: true,
            status: 200
        })

    }catch(error){
        res.status(500).json({
            message: "Erro in Login",
            error: error.message,
            status: 500
        })
    }
}

export default postLogin