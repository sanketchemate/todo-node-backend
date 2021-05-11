const todoModel = require("../models/todo.model");


exports.createTask = async(req,res,next)=>{
    try {
        const addToDoTask= await todoModel.create(req.body)
    res.status(201).json({
        success:true,
        data:addToDoTask
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            data:null,
            err:error.message
        })
    }
  
}

exports.getAllTasks = async(req,res)=>{
    try {
        const allTasks = await todoModel.find();
        res.status(200).json({success:true,data:allTasks})
    } catch (error) {
      res.status(400).send({success:false, data:null,err:error.message})
    }
  }
  
  // Get single Task
  exports.getTask = async(req,res,next)=>{
      try {
         
          const singleTask = await todoModel.findById(req.params.id);
          res.status(200).json({success:true,data:singleTask})
      } catch (error) {
        res.status(400).send({success:false,err:error})
      }
  }


  
exports.updateTask = async(req,res)=>{
    try {
        const updatedTask = await todoModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });

        if(!updatedTask){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:updatedTask})
    } catch (error) {
      res.status(400).send({success:false,err:error})
    }
}


exports.deleteTask = async(req,res)=>{
    try {
        const deletedTask = await todoModel.findByIdAndDelete(req.params.id);

        if(!deletedTask){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:{}})
    } catch (error) {
      res.status(400).send({success:false,err:error})
    }
}