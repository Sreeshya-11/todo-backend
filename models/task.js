const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    task_id:{
        type: Number,
        unique: true,
        required: true
    },
    task_name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("task",taskSchema)