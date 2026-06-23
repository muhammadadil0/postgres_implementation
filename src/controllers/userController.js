const pool = require('../config/db')

async function createUser(req,res){
    try{

        const {name,email} = req.body;
        const result = await pool.query(
            " INSERT INTO users (name, email) values ($1,$2) returning *",
            [name,email]
        );
        res.json(result.rows[0]);
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

async function getUser(req,res){
    try{
    const result = await pool.query(
        "select * from users"
    );
    res.json(result.rows)

    }
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports = {createUser,getUser}