import mysql, {Pool} from "mysql2/promise";

const db: Pool = mysql.createPool({
    host: "localhost",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
});

export default db;z