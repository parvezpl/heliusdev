const mongoose = require('mongoose');
const VisitSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        default:  visiter
    },
    count: {
        type: Number,
        default: 0
    },
});

export default mongoose.models.Visit || mongoose.model('Visit', VisitSchema);