const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;


app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Aaron', lastName: 'Jane'},
    {id: 2, firstName: 'Mystic', lastName: 'Lane'},
    {id: 3, firstName: 'Carter', lastName: 'Payne'},
  ];

  res.json(customers);
});

app.listen(port, () => `Server running on port ${port}`);