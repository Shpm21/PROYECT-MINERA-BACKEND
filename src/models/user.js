import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define(
  'user',
  {
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    second_lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_zone: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default User
