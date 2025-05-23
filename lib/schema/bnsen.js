const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  act: String,
  title: String,
  content: String
});


const BnsenglishsSchema = new mongoose.Schema({
    chapter: {
        type: String,
        require: true,
    },
    detail: [detailSchema],
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

export default mongoose.models.Bnsenglishs || mongoose.model('Bnsenglishs', BnsenglishsSchema);
