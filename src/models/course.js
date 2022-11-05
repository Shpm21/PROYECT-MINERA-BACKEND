import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const Course = sequelize.define(
  'course',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Course
