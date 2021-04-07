const db = require('../models');
const Tutorial = db.tutorials;
const Op =db.Sequelize.Op;

// Create and Save a new Tutorial

exports.create = (req,res)=>{
    // Validate request 
    if(!req.body.title){
        res.status(400).send({message : "Content cannot be empty.!"});
        return;
    }
    // Create a Tutorial
    const tutorial = {
        title : req.body.title,
        description : req.body.description,
        published : req.body.published ? req.body.published : false
    };
    // Save Tutorial in database
    Tutorial.create(tutorial)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error Occurred"});
    });
};

// Retrieve all Tutorials from the database

exports.findAll =(req,res)=>{
    const title = req.query.title;
    var condition = title ? {title : {[Op.iLike]: `%${title}%`}} : null;

    Tutorial.findAll({where:condition})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error occurred"});
    });
};

// Find a single Tutorial with an id

exports.findOne =(req,res)=>{
    const id = req.params.id;
    Tutorial.findByPk(id)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message : err.message ||"Error retrieving Tutorial"+id});
    });
};

// Update a Tutorial with an id

exports.update = (req,res)=>{
    const id = req.params.id;
    Tutorial.update(req.body,{
        where : {id: id}
    })
    .then(num=>{
        if(num==1){
            res.send({message : "Tutorial Updated Successfully"});
        }else{
            res.send({message: "Cannot update Tutorial"});
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Error Updating Tutorial"});
    })
};

// Delete a Tutorial with specified id

exports.delete= (req,res)=>{
    const id = req.params.id;
    Tutorial.destroy({
        where : {id:id}
    })
    .then(num=>{
        if(num == 1){
            res.send({message: "Tutorial was deleted Successfully"});
        }else{
            res.send({message: "Cannot delete Tutorial"});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"couldnot delete Tutorial.."});
    })

};

// Delete all Tutorials from database

exports.deleteAll = (req,res)=>{
    Tutorial.destroy({
        where:{},
        truncate : false
    })
    .then(nums=>{
        res.send({message:`${nums} Tutorials were deleted Successfully`});
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Eroor occurred while deleting all tutorials"});
    })
};

// Find all published Tutorials

exports.findAllPublished = (req,res)=>{
    Tutorial.findAll({where:{published:true}})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Some error occured while retreiving Tutorials"});
    })
};

