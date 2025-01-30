const getUser = (req,res)=>{
    try{
        res.status(200).json({message:"Admin Get all blogs executed successfully"});
    }
    catch(err){
        res.status(400).json({err : err.message})
    }
}

const singleUser = (req,res)=>{
    try {
        res.status(200).json({message:"Admin Get Single Blog Executed Successfully"})
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

const postUser = (req,res)=>{
    try{
        res.status(200).json({message:"Admin post blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const updateUser = (req,res)=>{
    try{
        res.status(200).json({message:"Admin update blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const deleteUser = (req,res)=>{
    try{
        res.status(200).json({message:"Admin delete blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}


module.exports = {getUser , singleUser, postUser , updateUser , deleteUser}