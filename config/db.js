const postgres = require('postgres');

//const sql = postgres(process.env.DATABASE_URL);
const sql = postgres({
    host        : 'ec2-52-205-61-60.compute-1.amazonaws.com',         // Postgres ip address or domain name
    port        : 5432,       // Postgres server port
    database    : 'denllfns60eujm',         // Name of database to connect to
    username    : 'zrhibfgouvlzlx',         // Username of database user
    password    : '83e21b29a78cd048957a671ed11b1e17f9d00ada4478a1c51d5a6052eaae1be4',         // Password of database user
    ssl         : true,      // True, or options for tls.connect
    max         : 10,
});

module.exports = sql;