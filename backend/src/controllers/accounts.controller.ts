import * as accountServices from "../services/accounts.services"
import { Request, Response } from "express"

export const getAccounts = async (req: Request, res: Response) => {
  res.send(await accountServices.getAccounts())
}

export const getAccountByID = async (req: Request, res: Response) => {
  try {
    res.send(await accountServices.getAccountByID(Number(req.params.id)))
  } catch (err: any) {
    res.status(404).send(err.message)
  }
  
}