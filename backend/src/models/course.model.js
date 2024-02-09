import mongoose from 'mongoose';
const storySchema = new mongoose.Schema({
    User:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});
const courseSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    owner:{
        type: String,
        required: true
    },
    story:[storySchema]
});



const Course = mongoose.model('Course', courseSchema);
export default Course;