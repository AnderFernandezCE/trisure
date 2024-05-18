import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import accountsRouter from "./routes/accounts.router";
import sharedAccountsRouter from "./routes/sharedaccounts.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log(req.query)
  res.send("Express + TypeScript Serverrrrr");
});

app.use(express.json());
app.use('/accounts', accountsRouter);
app.use('/sharedaccounts', sharedAccountsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});