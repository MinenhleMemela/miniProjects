const express =require('express');
const cors = require('cors');
const bparser=require ('body-parser');
const app = express();
const route = require('./Routes/User.routes');
const path = require('path');

app.use(bparser.json());
app.use(cors());
app.use("/", route);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bparser.json({ limit: '50mb' }));
app.use(bparser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: 'http://localhost',  // Replace with your ASP.NET Web Forms site URL
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
  }));


module.exports = app;
