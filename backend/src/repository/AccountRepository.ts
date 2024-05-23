import { Op } from "sequelize";
import Account from "../dto/Account";
import BaseRepository from "./BaseRepository";

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
      where: { uuid: {[Op.eq] : uuid} }
    });
  }
  async findByID(id: number) {
    return await Account.findOne({
      where: { id: {[Op.eq] : id} }
    });
  }
  async create(data: Account) {
    return data;
  }
}