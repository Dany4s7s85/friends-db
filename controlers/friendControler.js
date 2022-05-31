const Friend = require('../models/friendModel')

exports.createFrient = async (req, res) =>{

    let doc = await Friend.create(req.body);
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });

}

exports.getAllFriend =async (req, res)=>{

    let doc = await Friend.find();
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Got one friend" },
      });
}

exports.getOneFriend = async(req, res) =>{
    let doc = await Friend.findById(req.params.id)
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
}


exports.getOneFriendAndUpdate = async(req, res) =>{
    let doc = await Friend.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
}

exports.getOneFriendAndDelete = async(req, res) =>{
    let doc = await Friend.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Firendcreated successfully" },
      });
}