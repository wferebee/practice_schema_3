const mongoose = require("mongoose");


// try a unique tag
const CarSchema = new mongoose.Schema({
    'type': {

        'make': {
            type: String,
            trim: true,
            
        },
        
        "model": {
            type: String,
            trim: true,
        }
    },

    'color': {
        type: String
    },

    timestamps: {
        type: Date,
    }
});



var Car = mongoose.model('cars', CarSchema);

module.exports = Car;