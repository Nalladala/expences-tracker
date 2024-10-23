const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');

const app = express();
app.use(bodyParser.json());

app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3001');
});
