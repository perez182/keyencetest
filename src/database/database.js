import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "keyencedb", // db name,
  "root", // username
  'eV<No}pXV8C|-|"_', // password
  {
    host: "34.71.28.232",
    dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);