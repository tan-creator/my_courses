import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema(
    {
        Name: { type: String, required: true },
        Description: { type: String, maxLength: 255 },
        Image: { type: String },
        slug: { type: String, slug: 'Name', unique: true },
        videoId: { type: String },
    },
    {
        timestamps: true,
    },
);

const model = mongoose.model('course', course);
export default model;
