const express=require('express'); //instead of import here we use require (here we are importing a function)
const mongoose=require('mongoose');
const cors=require('cors');
const app=express(); //imported function will be stored to app
const dns=require('dns');
const { createTask, getTask, deleteTask } = require("./controllers/taskController");

dns.setServers(["8.8.8.8","8.8.4.4"])
app.use(express.json());
app.use(cors());


const MONGODB_URI="mongodb+srv://nrsreeshya_db_user:vMzWQgLyVgl4doLw@cluster0.wfdp2fz.mongodb.net/";

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Mongo connected successfully....")
}).catch((err)=>{
    console.log("Mongo Connection Failed!",err)
})

app.post("/create",createTask);
app.get("/fetch",getTask);
app.delete("/delete/:id",deleteTask); //app.delete("/:id",deleteTask);

//app.listen(port number,callback function)
//listening for events
//http://localhost:4000
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});
