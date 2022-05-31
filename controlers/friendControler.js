const Friend = require('../models/friendModel')

exports.createFrient = async (req, res) =>{
try {
    let doc = await Friend.create(req.body);
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
}catch(err){
    
    res.status(400).json({
        status: "Error",
        data: { message: err.message },
      });
}
 

}

exports.getAllFriend =async (req, res)=>{
   try{
    let doc = await Friend.find();
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Got one friend" },
      });
   }catch(err){
    
    res.status(400).json({
        status: "Error",
        data: { message: err.message },
      });
}
    
}

exports.getOneFriend = async(req, res) =>{

    try{
        let doc = await Friend.findById(req.params.id)
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
    }catch(err){
    
        res.status(400).json({
            status: "Error",
            data: { message: err.message },
          });
    }
    
}


exports.getOneFriendAndUpdate = async(req, res) =>{
    try{
        let doc = await Friend.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            status: "Success",
            data: { friend: doc, message: "Firendcreated successfully" },
          });
    }catch(err){
    
        res.status(400).json({
            status: "Error",
            data: { message: err.message },
          });
    }
    
}

exports.getOneFriendAndDelete = async(req, res) =>{
    try{
        let doc = await Friend.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
    }catch(err){
    
        res.status(400).json({
            status: "Error",
            data: { message: err.message },
          });
    }
    
}