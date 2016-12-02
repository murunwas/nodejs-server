const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')

const config = require("./config/config");


const app = express();

require("./config/db")(app);
//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors())
    .use(express.static('public'))


//routes
require("./route/routes")(app);


app.listen(config.port, () => {
    console.log("listening to %s...", config.port);
});