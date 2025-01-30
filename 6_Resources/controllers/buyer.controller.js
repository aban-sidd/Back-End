const getBuyer = (req,res)=>{
    try{
        res.status(200).json({message:"Admin Get all blogs executed successfully"});
    }
    catch(err){
        res.status(400).json({err : err.message})
    }
}

const singleBuyer = (req,res)=>{
    try {
        res.status(200).json({message:"Admin Get Single Blog Executed Successfully"})
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

const postBuyer = (req,res)=>{
    try{
        res.status(200).json({message:"Admin post blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const updateBuyer = (req,res)=>{
    try{
        res.status(200).json({message:"Admin update blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const deleteBuyer = (req,res)=>{
    try{
        res.status(200).json({message:"Admin delete blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}


module.exports = {getBuyer , singleBuyer, postBuyer , updateBuyer , deleteBuyer}