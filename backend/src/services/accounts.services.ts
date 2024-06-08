import { AccountNew } from "../dto/types";
import { AccountRepository } from "../repository/AccountRepository";

const repository = new AccountRepository();

export const getAccounts = async() =>{
  return await repository.getAll()
}

export const getAccountByID = async(id : number) =>{
  const account = await repository.findByID(id)
  if(!account) throw new Error('Account not found');
  return account
}

export const createAccount = async(accountInfo : AccountNew) =>{
  const account = await repository.create(accountInfo)
  return account
}