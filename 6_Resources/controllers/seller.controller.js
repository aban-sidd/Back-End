const sellerUser = (req,res) => {
    try{
        res.status(200).json({message:"Seller Get all blogs executed successfully"});
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const singleSeller = (req,res) => {
    try{
        res.status(200).json({message:"Seller Get Single Blog Executed Successfully"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const sellerPost = (req,res) => {
    try{
        res.status(200).json({message:"Seller post blog executed successfully"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const sellerPatch = (req,res) => {
    try{
        res.status(200).json({message:"Seller update blog executed successfully"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const sellerDelete = (req,res) => {
    try{
        res.status(200).json({message:"Seller delete blog executed successfully"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {sellerUser, singleSeller, sellerPost, sellerPatch, sellerDelete}