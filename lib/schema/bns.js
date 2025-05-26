const mongoose = require('mongoose');
const BnshindisSchema = new mongoose.Schema({
    chapter: {
        type: String,
        require: true,
    },
    detail: [{
        type: String,
    }],
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


export default mongoose.models.Bnshindis || mongoose.model('Bnshindis', BnshindisSchema);
