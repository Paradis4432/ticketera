// import mysql, {Pool} from "mysql2/promise";
import {Pool} from "pg";

const db: Pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

function asd<R, Q extends R>({test, test1}: { test: R, test1: Q }) {
    return test as Q;
}

interface QueryParams {
    q: string;
    v: any[];
}


/**
 *
 * @param p1 either the string or the query params
 * @param p2 list[] of values
 * @return always list of values, even if only 1 found
 */
async function qquery<T>(p1: string | QueryParams, p2?: any[]): Promise<T[]> {
    let q: string;
    let v: any[];

    if (typeof p1 === "string") {
        q = p1;
        v = p2 ?? [];
    } else {
        q = p1.q;
        v = p1.v;
    }

    return (await db.query(q, v)).rows as T[];
}


export {
    db,
    qquery
};
