import mongoose from "mongoose";

export abstract class Collection {
    constructor(public model: mongoose.Model<any>) { }

    async get(id: string) {
        const data = await this.model.findOne({ id: id });
        if (!data) {
            const newData = new this.model({ id: id });
            await newData.save();
            return newData;
        }
        return data;
    }

    async update(id: string, data: any) {
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

    async set(id: string, data: any) {
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

    async delete(id: string) {
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

    async create(data: any) {
        const newData = new this.model(data);
        await newData.save();
        return newData;
    }
}