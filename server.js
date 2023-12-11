const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use('/', async (req, res) => {
  const apiUrl = 'https://data.telangana.gov.in/api/1/datastore/query/48b3575b-b10a-4a34-83e4-064e14ad41d2/0?count=true&results=true&schema=true&keys=true';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
