import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const Zone = sequelize.define(
  'zone',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Zone
