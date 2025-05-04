const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        // require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
    }],
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Links',
    }],
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    },
    memberShip: {
        type: String,
        enum: ['free', 'paid'],
        default: "free"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    comminityMember: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    profilePic: {
        type: String,
        default: ""
    },

    officeUser:{
        type:Boolean,
        default:false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);
