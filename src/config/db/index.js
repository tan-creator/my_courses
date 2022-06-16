import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tan_courses');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failure!');
    }
}

const conn = connect();
export default conn;
