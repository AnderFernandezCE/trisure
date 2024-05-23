import express, { Router } from "express";
import { getAccounts, getAccountByID } from "../controllers/accounts.controller";

const accountsRouter: Router = express.Router();

accountsRouter.get('/', getAccounts)
accountsRouter.get('/:id', getAccountByID)


export default accountsRouter;