const {json} = require('body-parser');
const userService= require('../services/services');
const { request } = require('http');
const path = require('path');
const jwt = require('jsonwebtoken');
const { read } = require('fs');

/*========================================================*/
const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB file size limit
});

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

/*exports.getAllUsers = async ( req,res, next) =>{
    try 
    {
        var data= await userService.getAllUsers();
        res.json({nextStatus: true,info:data});

    }
    catch (err)
    {
        next(err);
    }

}*/