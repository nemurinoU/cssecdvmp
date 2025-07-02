import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    password: {
        type: String, 
        required:true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    firstname: String,

    lastname: String,
    
    dateCreated: {
        type: Date, 
        default: Date.now()
    },

    profilepic: {
        type: String,
        default: './images/assets/default_user.png'   
    },

    bio: String,
    
    birthday: {
        type: Date
    },

    upvotes: {
        type: [Schema.Types.ObjectId],
        ref: 'Review',
        default: []
    },

    downvotes: {
        type: [Schema.Types.ObjectId],
        ref: 'Review',
        default: []
    }
});

export const User = mongoose.model('User', userSchema);