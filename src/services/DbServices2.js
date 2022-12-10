import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

class DbServices {
  instance = null
  constructor() {
    this.credentials = {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    }
    this.sequelize = new Sequelize(
      this.credentials.database,
      this.credentials.user,
      this.credentials.password,
      {
        host: this.credentials.host || 'localhost',
        dialect: 'postgres'
      }
    )
  }

  static getInstance() {
    if (!DbServices.instance) {
      DbServices.instance = new DbServices()
    }
    return DbServices.instance
  }

  getSequelize() {
    return DbServices.getInstance().sequelize
  }
}

export default DbServices
