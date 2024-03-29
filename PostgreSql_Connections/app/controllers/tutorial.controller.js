// import database object

const db = require('../models');
const Tutorial = db.tutorials;
const Comment = db.comments;

// Create and Save new Tutorials

exports.createTutorial = (tutorial)=>{
    return Tutorial.create({
        title : tutorial.title,
        description : tutorial.description
    })
    .then((tutorial)=>{
        console.log(">>Created tutorial :"+JSON.stringify(tutorial,null,4));
        return tutorial;
    })
    .catch((err=>{
        console.log(">> Error while creating Tutorial : ",err);
    }))
};

// Create and save new Comments

exports.createComments =(tutorialId,comment)=>{
    return Comment.create({
        name :comment.name,
        text : comment.text,
        tutorialId : tutorialId
    })
    .then((comment)=>{
        console.log(">> Created Comment :"+JSON.stringify(comment,null,4));
        return comment;
    })
    .catch((err)=>{
        console.log(">> Error while creating comment : ",err);
    })
};

// Get comments for given tutorial

exports.findTutorialById = (tutorialId)=>{
    return Tutorial.findByPk(tutorialId,{include : ["comments"]})
    .then((tutorial)=>{
        return tutorial;
    })
    .catch((err)=>{
        console.log(">> Error while finding tutorial : ",err);
    });
};

// Get comments for given comment id

exports.findCommentById = (id)=>{
    return Comment.findByPk(id,{include:["tutorial"]})
    .then((comment)=>{
        return comment;
    })
    .catch((err)=>{
        console.log(">> Error while finding comment : ",err);
    });
};
 
// Get all Tutorials include comments

exports.findAll= ()=>{
     return Tutorial.findAll({
         include : ["comments"]
     })
     .then((tutorials)=>{
         return tutorials;
     });
};

