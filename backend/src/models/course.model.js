import mongoose from 'mongoose';

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
    
});