const getCategory = (req,res)=>{
    try{
        res.status(200).json({message:'All Categories fetched successfully'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const singleCategory = (req,res)=>{
    try{
        res.status(200).json({message:'Single Category fetched successfully'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const postCategory = (req,res)=>{
    try{
        res.status(200).json({message:'Category created successfully'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

const updateCategory = (req,res)=>{
    try{
        res.status(200).json({message:'Category updated successfully'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}


const deleteCategory = (req,res)=>{
    try{
        res.status(200).json({message:'Category deleted successfully'})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}

module.exports = {getCategory,singleCategory,postCategory,updateCategory,deleteCategory}