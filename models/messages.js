const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
        _id: {
			name : '_id',
			type: mongoose.Types.ObjectId,
			required: true
		},  
        conversation_id:{
            name: 'Conversation_Id',
			type: String,
			required: true
        },
        message:{
            name: 'Message',
			type: String,
			required: false
        },
        createdBy: {
			name: 'CreatedBy',
			type: Date,
			required: false
		},
		modifiedBy: {
			name: 'ModifiedBy',
			type: Date,
			required: false
		}
});

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;
