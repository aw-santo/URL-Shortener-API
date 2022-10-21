const mongoose = require('mongoose');

const mapSchema = mongoose.Schema({
    key: {
        type: String,
        validate(value) {
            if (value.length != 6) {
                throw new Error("Invalid id.");
            }
        }
    },
    value: {
        type: String
    }
});

const Mapper = mongoose.model("Mapper", mapSchema);

module.exports = Mapper;