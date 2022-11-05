import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const credentials = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
}

const sequelize = new Sequelize(
  credentials.database,
  credentials.user,
  credentials.password,
  {
    host: credentials.host || 'localhost',
    dialect: 'postgres'
  }
)

export default sequelize
