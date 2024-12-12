import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordEspiresAt: Date,
    verificationToken: String,
    verificationTokenEspiresAt: Date,
},{timestamp: true});

export const User = mongoose.model('User', userSchema);
