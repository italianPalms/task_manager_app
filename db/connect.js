const mongoose = require('mongoose')

const connectionString = "mongodb+srv://Eirik:TaskManager123@task-manager-app.2gz7czb.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose
    .connect(connectionString)
}

module.exports = connectDB