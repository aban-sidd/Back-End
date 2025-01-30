const getBlogs = (req,res)=>{
    try{
        res.status(200).json({message:"Get all blogs executed successfully"});
    }
    catch(err){
        res.status(400).json({err : err.message})
    }
}

const singleBlog = (req,res)=>{
    try {
        res.status(200).json({message:"Get Single Blog Executed Successfully"})
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

const postBlog = (req,res)=>{
    try{
        res.status(200).json({message:"post blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const updateBlog = (req,res)=>{
    try{
        res.status(200).json({message:"update blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const deleteBlog = (req,res)=>{
    try{
        res.status(200).json({message:"delete blog executed successfully"})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}


module.exports = {getBlogs , singleBlog, postBlog , updateBlog , deleteBlog}