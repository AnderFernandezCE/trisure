import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import router from "./routes/index.router";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(json())
app.use(cors())
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log(req.query)
  res.send("Express + TypeScript Serverrrrr");
});

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});