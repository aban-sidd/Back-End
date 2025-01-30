const getRecommend =  (req, res) => {
    try{
        res.status(200).json({message:'get all recommend executed successfully'})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const singleRecommend = (req, res) => {
    try{
        res.status(200).json({message:'get single recommend executed successfully'})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const postRecommend = (req, res) => {
    try{
        res.status(200).json({message:'post recommend executed successfully'})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const updateRecommend = (req, res) => {
    try{
        res.status(200).json({message:'update recommend executed successfully'})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const deleteRecommend = (req, res) => {
    try{
        res.status(200).json({message:'delete recommend executed successfully'})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {getRecommend, singleRecommend, postRecommend, updateRecommend, deleteRecommend}