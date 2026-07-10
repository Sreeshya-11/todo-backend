const taskModel = require("../models/task")

//create task
const createTask = async(req,res) =>{
    const body = {
        task_id: req.body.task_id,
        task_name: req.body.task_name
    }

    try{
        await taskModel.insertOne(body);
        res.status(200).json(
            { message: "Task created successfully" }
        )
    }

    catch(e){
        console.log(e)
        res.status(400).send("Unable to insert new task")
    }
}

//fetch task
const getTask = async(req,res) =>{
    try{
        const tasks = await taskModel.find()
        res.status(200).send(tasks) //return using res(response)
    }

    catch(e){
        console.log(e)
        res.status(400).send("Unable to fetch data")
    }
    
}


//delete task
const deleteTask = async(req,res) =>{
    const id = req.params.id;
     try{
        await taskModel.deleteOne({task_id:id}); //await taskModel.findOneAndDelete({task_id:id});
        res.status(200).json(
            { message: "Task deleted successfully" }
        )
    }

    catch(e){
        console.log(e)
        res.status(400).send("Unable to delete the task")
    }
}

module.exports={ createTask, getTask, deleteTask };
