const mongoose = require('mongoose');
// replace this URL below with your connection string from your MongoDB
let mongoDB = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
module.exports = mongoose.connect(mongoDB);