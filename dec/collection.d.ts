import mongoose from "mongoose";
export declare abstract class Collection {
    model: mongoose.Model<any>;
    constructor(model: mongoose.Model<any>);
    get(id: string): Promise<any>;
    update(id: string, data: any): Promise<any>;
    set(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    deleteAll(): Promise<import("mongodb").DeleteResult>;
    getAll(): Promise<any[]>;
    create(data: any): Promise<any>;
}
