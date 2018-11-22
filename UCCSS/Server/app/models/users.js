var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String },
    active: { type: Boolean, defualt: true },
    role: { type: String, enum: ['admin', 'user', 'staff']},
    registerDate: { type: Date, default: Date.now },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

userSchema.virtual('fullName')
    .get(function() {
        return this.firstname + ' ' + this.lastname;
    });

module.exports =
    Mongoose.model('User', userSchema);
