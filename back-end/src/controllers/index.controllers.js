const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '2310',
    database: 'app',
    port: '5432'
};

const pool = new Pool(config);



const getIncomings = async(req, res) => {
    try {
        const response = await pool.query("SELECT sum(monto) FROM public.operations WHERE tipo like 'ingreso'");
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const getExpenses = async(req, res) => {
    try {
        const response = await pool.query("SELECT sum(monto) FROM public.operations WHERE tipo like 'egreso'");
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const getLastIncomings = async(req, res) => {
    try {
        const response = await pool.query("SELECT * FROM operations WHERE tipo like 'ingreso' or tipo like 'Ingreso'");
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const getLastExpenses = async(req, res) => {
    try {
        const response = await pool.query("SELECT * FROM operations WHERE tipo like 'egreso' or tipo like 'Egreso'");
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};



const getAllOperations = async(req, res) => {
    try {
        const response = await pool.query('SELECT * FROM operations ORDER BY fecha DESC LIMIT 10');
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const getLastOperations = async(req, res) => {
    try {
        const response = await pool.query('SELECT * FROM operations');
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const insertOperation = async(req, res) => {
    try {
        const { concepto, monto, fecha, tipo } = req.body;
        
        const response = await pool.query('INSERT INTO operations (concepto, monto, fecha, tipo) VALUES($1, $2, $3, $4)', [concepto, monto, fecha, tipo]);

        res.json({
            message: 'Operation created succesfully',
            body: {
                operation: { tipo, monto}
            }
        });
    }
    catch(err){
        console.log(err)
    }
};

const getOperationById = async(req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM operations WHERE id = $1', [id]);
        res.status(200).json(response.rows)
    } catch(err) {
        console.log(err)
    }
};

const deleteOperation = async(req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM operations WHERE id = $1', [id]);
        res.status(200).json(`Operation ${id} deleted succesfully`)
    } catch(err) {
        console.log(err)
    }
};

const updateOperation = async(req, res) => {
    try {
        const id = req.params.id;
        const {  concepto, monto, tipo } = req.body
        const response = await pool.query('UPDATE operations SET concepto = $1, monto = $2, tipo = $3 WHERE id = $4', [concepto, monto, tipo, id]);
        res.status(200).json(`Operation ${id} updated succesfully`)
        console.log(response)
    } catch(err) {
        console.log(err)
    }
};


module.exports = {
    getLastExpenses,
    getLastIncomings,
    getExpenses,
    getIncomings,
    getAllOperations,
    getLastOperations,
    insertOperation,
    getOperationById,
    deleteOperation,
    updateOperation
}