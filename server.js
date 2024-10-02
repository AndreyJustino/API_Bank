import app from "./src/app.js";
import sequelize from "./src/database/config.js";

sequelize.sync().then(async () => {
    try{
        await sequelize.authenticate()

        app.listen(3000, (req,res) => {
            console.log("Server started, port:", 3000)
        })
    } catch(error){
        console.error("Error connecting to database: ", error.message)
    }
})
