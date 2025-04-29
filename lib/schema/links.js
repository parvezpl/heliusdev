const mongoose = require('mongoose');
const LinksSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true,
    },
    links: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdat:{
        type: Date,
        default: Date.now,
    }
},
)


export default mongoose.models.Links || mongoose.model('Links', LinksSchema);
