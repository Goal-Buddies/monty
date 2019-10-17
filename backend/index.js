const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('../output'));

app.listen(port, () => console.log(`Monty listening on port ${port}`));
