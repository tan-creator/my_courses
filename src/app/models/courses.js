import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
    Name: { type: String },
    Description: { type: String, maxLength: 255 },
    Image: { type: String },
    slug: { type: String },
    CreateAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
});

const model = mongoose.model('course', course);
export default model;
