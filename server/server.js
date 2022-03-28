const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/adafruit', require('./routes/adafruit.js'))
app.use('/api/plot', require('./routes/PlotRouter'));

app.use('/api/users', require('./routes/UserRouter'));
// app.use('/api/auth', require('./routes/auth'));
app.use('/api/plot', require('./routes/PlotRouter'));
app.use('/api/history', require('./routes/HistoryRouter'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));