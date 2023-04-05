const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'DB_USR',
    host: 'DB_HOST',
    database: 'DB_NAME',
    password: 'DB_PWD',
    port: 'DB_PORT' || 5432,
});

module.exports = pool;
