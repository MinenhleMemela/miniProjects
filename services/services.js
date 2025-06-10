const db = require('../Config/database');
const bcrypt = require('bcrypt');
const salty = 10;
const nodemailer = require('nodemailer');
require('dotenv').config();

// 

class userService
{
    /*static async getAllUsers()
    {
        try {
            const query = `SELECT * FROM users where status = "Pending"`;

            const [rows, _fields] = await db.query(query);
            return rows;
        } 
        catch (err) 
        {
            throw err;
        }
    }*/

}