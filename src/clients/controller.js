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

const createClient = (req, res) => {
    const { name, email, telephone, owner, founded, city } = req.body;
    pool.query(queries.clientExists, [email], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.status(409).send('Client already exists');
        }
        pool.query(queries.createClient, [name, email, telephone, owner, founded, city], (error, results) => {
            if (error) throw error;
            res.status(201).send(`Client added successfully`);
        });
    });
};

const updateClient = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, telephone, owner, founded, city } = req.body;
    pool.query(queries.clientExists, [email], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            pool.query(queries.updateClient, [name, email, telephone, owner, founded, city, id], (error, results) => {
                if (error) throw error;
                res.status(200).send(`Client modified successfully`);
            });
        }
    });
};
