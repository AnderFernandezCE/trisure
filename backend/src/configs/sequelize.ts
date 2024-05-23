import { Sequelize } from 'sequelize';
import DBCONFIG from './db.config';

const sequelize = new Sequelize({database: DBCONFIG.database, dialect:"mysql", username:DBCONFIG.user, host: DBCONFIG.host, password: DBCONFIG.password})

export default sequelize;