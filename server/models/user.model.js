const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, require: true}
    },
    {collection: 'user-data'}
)

const model = mongoose.model('UserData', User)

module.exports = model