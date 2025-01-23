import express, {Request, Response} from "express";
import sequelize from "./src/database"
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());
app.get("/", async (req: Request, res: Response) => {
    res.send("Hello, project dashboard initialized");
})
app.listen(port, async() => {
    try{
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
    }catch(error){
        console.error("Unable to connect to the database: ", error);
    }
    console.log(`Server is running at http://localhost:${port}`);
});
