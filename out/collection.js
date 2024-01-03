"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
class Collection {
    constructor(model) {
        this.model = model;
    }
    async get(id) {
        const data = await this.model.findOne({ id: id });
        if (!data) {
            const newData = new this.model({ id: id });
            await newData.save();
            return newData;
        }
        return data;
    }
    async update(id, data) {
        const userData = await this.get(id);
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];
                userData[key] += value;
            }
        }
        await userData.save();
        return userData;
    }
    async set(id, data) {
        const userData = await this.get(id);
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];
                userData[key] = value;
            }
        }
        await userData.save();
        return userData;
    }
    async delete(id) {
        const data = await this.model.findOneAndDelete({ id: id });
        return data;
    }
    async deleteAll() {
        const data = await this.model.deleteMany({});
        return data;
    }
    async getAll() {
        const data = await this.model.find();
        return data;
    }
    async create(data) {
        const newData = new this.model(data);
        await newData.save();
        return newData;
    }
}
exports.Collection = Collection;
