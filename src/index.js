import app from "./app.js";
import { sequelize } from './database/database.js';

import './models/Attendance.js';

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
        app.listen(4000);
        console.log("Server on port 4000");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main()