const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 10,
        },
        
        email: {
            type: String,
            unique: true,
            required: true,
            
        }
    }
)