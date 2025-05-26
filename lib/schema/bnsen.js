const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  section: String,
  section_title: String,
});


const BnsenglishsSchema = new mongoose.Schema({
    chapter: {
        type: String,
        require: true,
    },
    chapter_title:{
        type: String,
        require: true,
    },
    sections: [detailSchema],
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
