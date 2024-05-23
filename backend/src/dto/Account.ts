// models/Account.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../configs/sequelize"

// Define the attributes interface
interface AccountAttributes {
  id: number;
  uuid: string;
  name: string;
}

// Define the creation attributes interface for optional `id` since it's auto-incremented
interface AccountCreationAttributes extends Optional<AccountAttributes, 'id'> {}

// Define the model class
class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
  public id!: number;
  public uuid!: string;
  public name!: string;
}

// Initialize the model
Account.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // passing the `sequelize` instance is required
    tableName: 'account',
    timestamps: false,
  }
);

export default Account;
