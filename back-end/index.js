'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const resumeRoutes = require('./routes/resume-routes');
const reportRoutes = require('./routes/report-routes');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', resumeRoutes.routes);
app.use('/api', reportRoutes.routes);
app.use('/api', authRoutes.routes);


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
