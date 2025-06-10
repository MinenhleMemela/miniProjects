const app = express();
import route from './routes/routes.js';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(bodyParser.json());
app.use(cors());
app.use("/", route);
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: 'http://localhost',  // Replace with your ASP.NET Web Forms site URL
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
  }));

export default app;
