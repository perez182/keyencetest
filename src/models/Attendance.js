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
        type: DataTypes.DATEONLY,
      },
      punchin: {
        type: DataTypes.STRING,
      },
      punchout: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
    }
  );
  