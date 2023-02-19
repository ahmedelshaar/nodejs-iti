const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const port = process.env.PORT || 8080;
const app = express();
app.listen(port, () => console.log(`listening on Port: ${port}`));

app.use(cors());
app.use(logger("dev"));

app.use((request, response, next)=>{
    response.status(404)
    .json({massage:"Not found"})
})

app.use((error, request, response, next)=>{
    response.status(500)
    .json({massage:error+""});
})
