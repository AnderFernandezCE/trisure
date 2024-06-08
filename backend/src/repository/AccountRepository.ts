import { Op } from "sequelize";
import Account from "../models/Account";
import BaseRepository from "./BaseRepository";
import { AccountNew } from "../dto/types";
import { v4 as uuidv4 } from 'uuid';

// let accounts: Account[] = [
//   { id: 1, name: 'Account 1', uuid: "uuid1"},
//   { id: 2, name: 'Account 2', uuid: "uuid2"},
//   { id: 3, name: 'Account 3', uuid: "uuid3"},
// ];

export class AccountRepository implements BaseRepository<Account> {
  async getAll() {
    return await Account.findAll();
  }
  async findByUUID(uuid: string) {
    return await Account.findOne({
      where: { uuid: { [Op.eq]: uuid } }
    });
  }
  async findByID(id: number) {
    return await Account.findOne({
      where: { id: { [Op.eq]: id } }
    });
  }
  async create(data: AccountNew) {
    const existingAccount = await Account.findOne({
      where: { name: { [Op.eq]: data.name } }
    })
    if (existingAccount) throw new Error('Account already exists');
    let newAccount: Account = Account.build({ name: data.name, uuid: uuidv4()});
    newAccount = await newAccount.save()
    return newAccount;
  }
}