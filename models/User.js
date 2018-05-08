const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users',userSchema); //two arguments means we are uploading data with particular Schema
//                                    mongoose.model('users') with one argument means to fetch data;