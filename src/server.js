import "dotenv/config";
import express from "express";
import jogoRouter from "./routes/jogo.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/jogo", jogoRouter)


app.listen(PORT, () => {
  console.log(`ta funcionando aqui: http://localhost: ${PORT}`);
});