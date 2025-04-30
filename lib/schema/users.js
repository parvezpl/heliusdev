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
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
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
}
    , { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema);
