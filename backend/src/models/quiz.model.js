import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
    optionText: String,
    isCorrect: Boolean
});

const QuestionSchema = new mongoose.Schema({
    questionText: String,
    options: [OptionSchema]
});

const QuizSchema = new mongoose.Schema({
    title: String,
    description: String,
    questions: [QuestionSchema]
});

const Quiz = mongoose.model('Quiz', QuizSchema);
export default Quiz;