import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now()
    },
    location:{
        type: GeolocationCoordinates,
        required: true
    },

})