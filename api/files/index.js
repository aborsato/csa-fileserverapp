const { Client } = require('pg');

module.exports = function (context, req) {
    const client = new Client({
        host: process.env['db_server'],
        user: process.env['db_user'],
        password: process.env['db_password'],
        database: process.env['db_database'],
        port: 5432,
        ssl: true
    });
    client.connect();
    client.query('SELECT * FROM files', (err, res) => {
        client.end();
        context.res = {
            status: 200,
            body: res.rows
        };
        context.log('to be done', res.rows);
        context.done();
    });

}