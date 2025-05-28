const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  section: String,
  section_title: String,
});


const BnshindisSchema = new mongoose.Schema({
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

export default mongoose.models.Bnshindis || mongoose.model('Bnshindis', BnshindisSchema);
