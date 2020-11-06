const mongoose = require('mongoose')
const schema =mongoose.schema

const maravilhosaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required : true // é obrigatório
    },
    id: {
        type: Number,
        required : false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    phrase: {
        type: String,
        required: true
    },
    history: [{
        type: String,
        required: true
    }],
    addedBy: {
        type: String,
        required: true
    }
})

const maravilhosaCollection = mongoose.model('maravilhosa', maravilhosaScrema)

module.exports = {maravilhosaCollection}