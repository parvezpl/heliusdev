const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        
        require: true,
    },
    content: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
},
    { timestamps: true }
)


export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
