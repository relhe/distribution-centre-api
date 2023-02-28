const getAllClients = 'SELECT * FROM clients';
const getClientById = 'SELECT * FROM clients WHERE id = $1';
const idExists = 'SELECT id FROM clients WHERE id = $1';
const clientExists = 'SELECT c FROM clients c WHERE c.email = $1';
const deleteClient = 'DELETE FROM clients WHERE id = $1';
const createClient =
    'INSERT INTO clients (name, email, telephone, owner, founded, city) VALUES ($1, $2, $3, $4, $5, $6)';
const updateClient =
    'UPDATE clients SET name = $1, email = $2, telephone = $3, owner = $4, founded = $5, city = $6 WHERE id = $7';

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    clientExists,
    deleteClient,
    updateClient,
    idExists,
};
