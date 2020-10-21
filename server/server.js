const express = require('express');
const app = express();
const PORT = 3000;

const data = [{id: 1, value: 'foo'}, {id, 2: value: 'bar'}];

app.use(express.json());

app.get('/api/data/', (req, res) => {
  res.status(200).json(data);
});

app.post('/api/data/', (req, res) => {
  data.push(req.body);
  res.status(200).send(req.body);
});

app.listen(PORT, () => { console.log('Server running on PORT ', PORT) });