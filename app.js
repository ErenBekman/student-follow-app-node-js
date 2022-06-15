const express = require('express');
require('./db/connection');
const errorMiddleware = require('./middleware/error');
const studentRouter = require('./router/students');
const parentRouter = require('./router/parents');
const schoolRouter = require('./router/schools');
const serviceRouter = require('./router/services');
const usersRouter = require('./router/users');
const authRouter = require('./router/auth');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/students', studentRouter);
app.use('/api/parents', parentRouter);
app.use('/api/schools', schoolRouter);
app.use('/api/services', serviceRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use(errorMiddleware);

app.listen(port || 5000, () => {
	console.log('server started');
});
