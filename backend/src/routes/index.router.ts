import express, { Router, Request, Response } from "express";
import accountsRouter from "./accounts.router";

const router : Router = express.Router();

router.use('/api/v1/accounts' , accountsRouter)

export default router;