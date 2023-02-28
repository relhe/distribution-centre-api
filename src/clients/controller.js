const pool = require('../../db-connect');
const queries = require('./queries');

const getAllClients = (req, res) => {
    pool.query(queries.getAllClients, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getClientById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.idExists, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
            res.status(404).send('Client not found');
        } else {
            pool.query(queries.getClientById, [id], (error, results) => {
                if (error) throw error;
                res.status(200).json(results.rows);
            });
        }
    });
};
