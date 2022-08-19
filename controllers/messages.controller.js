const { mongoose } = require('mongoose');
var Message = require('../models/messages');

//Fetching All Blog Data
exports.messageList = function(req, res){
    
    Message.find().then( function(blog){
        res.status(200).json({
            response: blog
        })
    },function(err){
        return res.status(500).json({
            error: err
        });    
    });
    
    
};

//Creating New Blog Data
exports.createMessages = function(req, res){
  
    const message = new Message(Object.assign({
        _id: mongoose.Types.ObjectId(),
        conversation_id: req.body.conversation_id,
        message: req.body.message,
        createdBy: new Date(),      
    }));

    message.save().then(function(blog){
        if(message.message.split(",")[0] == 'Hi' || message.message.split(",")[0] == 'Hello' || message.message.split(",")[0] == 'hi' || message.message.split(",")[0] == 'hello' || message.message.split(" ")[0] == 'Hi' || message.message.split(" ")[0] == 'Hello' || message.message.split(" ")[0] == 'hi' || message.message.split(" ")[0] == 'hello'){
            res.status(200).json({
                response_id: message.conversation_id,
                response: 'Welcome to StationFive.'          
            })
        }
        else if(message.message.split(",")[0] == 'Goodbye' || message.message.split(",")[0] == 'bye' || message.message.split(",")[0] == 'goodbye' || message.message.split(",")[0] == 'Bye' || message.message.split(" ")[0] == 'Goodbye' || message.message.split(" ")[0] == 'bye' || message.message.split(" ")[0] == 'goodbye' || message.message.split(" ")[0] == 'Bye'){
            res.status(200).json({
                response_id: message.conversation_id,
                response: 'Thank you, see you around.'          
            })
        }
        else if(message.message == ''){
            res.status(200).json({
                response_id: message.conversation_id,
                response: 'Sorry, I don’t understand.'          
            })
        }
        
    },
    function(err){
        return res.status(500).json({
            error: err  
        });    
    });   
};

