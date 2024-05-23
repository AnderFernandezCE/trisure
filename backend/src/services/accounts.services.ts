import { AccountRepository } from "../repository/AccountRepository";

export const getAccounts = async() =>{
  const a = new AccountRepository();
  return await a.getAll()
}

export const getAccountByID = async(id : number) =>{
  const a = new AccountRepository();
  const account = await a.findByID(id)
  if(!account) throw new Error('Account not found');
  return account
}