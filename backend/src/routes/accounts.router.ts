import express, { Router } from "express";
import { getAccounts, getAccountByID, createAccount } from "../controllers/accounts.controller";

const accountsRouter: Router = express.Router();

accountsRouter.get('/', getAccounts)
accountsRouter.post('/', createAccount)
accountsRouter.get('/:id', getAccountByID)


export default accountsRouter;