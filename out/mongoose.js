"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_json_1 = require("./json/config.json");
const collection_1 = require("./collection");
mongoose_1.default.connect(config_json_1.dblink, {
    useNewUrlParser: true,
});
mongoose_1.default.set('strictQuery', false);
class Support extends collection_1.Collection {
}
class Data {
}
exports.Data = Data;
