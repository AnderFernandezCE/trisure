import express, { Router, Request, Response } from "express";
import accountsRouter from "./accounts.router";
import sharedAccountsRouter from "./sharedaccounts.router";

const router : Router = express.Router();

router.use('/api/v1/accounts' , accountsRouter)
router.use('/api/v1/sharedaccounts', sharedAccountsRouter)

export default router;