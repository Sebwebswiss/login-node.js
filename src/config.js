const mongoose = require('mongoose');

// Koristite varijablu okoline za URL baze podataka
const url = process.env.MONGODB_URI; 

const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Database cannot be Connected", err);
});

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection part
const collection = mongoose.model("users", Loginschema);

module.exports = collection;
