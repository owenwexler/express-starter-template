const express = require('express');
const app = express();
const PORT = 3000;

const data = [{id: 1, value: 'foo'}, {id, 2: value: 'bar'}];

app.use(express.json());

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => { console.log('Server running on PORT ', PORT) });