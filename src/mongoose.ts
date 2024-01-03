import mongoose, { ConnectOptions } from "mongoose";
import { dblink } from "./json/config.json"
import { Collection } from "./collection";

mongoose.connect(dblink, {
    useNewUrlParser: true,
} as ConnectOptions);

mongoose.set('strictQuery', false);

class Support extends Collection {

}
export class Data {

}