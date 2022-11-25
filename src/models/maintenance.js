import sequelize from '../services/DbServices'
import { DataTypes } from 'sequelize'

const Maintenance = sequelize.define(
  'maintenance',
  {
    rut_user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id_equipment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Maintenance
