const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
    name: String,
    nickname: {type: String, unique: true}
});

module.exports = mongoose.model('Quiz', QuizSchema);