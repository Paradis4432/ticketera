const {Client} = require('pg')

const client = new Client ({
    host: "ep-blue-dream-a4eevgmh-pooler.us-east-1.aws.neon.tech",
    user: "default",
    port: 5432,
    password: "tiKHPT7mrXb6",
    database: "testing",
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

client.query(`SELECT * from events`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
});