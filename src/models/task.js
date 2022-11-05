import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const Task = sequelize.define(
  'task',
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
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id_maintenance_g: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Task
