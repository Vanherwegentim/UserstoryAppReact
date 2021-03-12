const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userstory = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        difficulty: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('userstories', Userstory)