const express = require('express');
const app = express();
const PORT = 5050;
const router = require('./routers/index');

app.use(express.json());
app.use(('/', router));

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
