export default class utilCourses {
    static multipleMongoosesToObject(mons) {
        return mons.map((mon) => mon.toObject());
    }

    static mongooseToObject(mon) {
        return typeof mon != 'object' ? mon.toObject() : mon;
    }
}
