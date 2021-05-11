const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    iscompleted:{
        type:Boolean,
        default:false
    },
    taskname:{
        type:String,
        required:[true,'Please enter Task Name'],
        maxlength:[100,'Task Name is too long']
    },
    taskdescription:{
        type:String,
        required:[true,'Please enter task description'],
        maxlength:[500,'description is too long']
    },
    date: {
        type: Date,
        default: Date.now
        }
    })


module.exports = mongoose.model('todo', todoSchema)