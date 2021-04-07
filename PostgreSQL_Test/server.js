const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

const db = require('./app/models');
db.sequelize.sync({force : true}).then(()=>{
    console.log("Drop and re-sync db");
});

require('./app/routes/tutorial.routes')(app);

const PORT =8081;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})