const mongoose = require('mongoose')

const connectionString = "mongodb+srv://Eirik:TaskManager123@task-manager-app.2gz7czb.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(connectionString)
    .then(() => console.log('Connected to the DB...'))
    .catch((err) => console.log(err))