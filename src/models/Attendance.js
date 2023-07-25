import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Project = sequelize.define(
    "attendances",
    {
      Employeeid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Employeename: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
        validate:{
            is:/^([0-2][0-9]|3[0-1]|[0-9])(\/|-)(0[1-9]|1[0-2]|[0-9])\2(\d{4})$/
        }
      },
      punchin: {
        type: DataTypes.STRING,
        validate:{
            is: /([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
          }
      },
      punchout: {
        type: DataTypes.STRING,
        validate:{
            is: /([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
          }
    },
    {
      timestamps: false,
    }
  );
  