"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAsyncSafely = exports.runSafely = void 0;
async function runSafely(func) {
    try {
        return func();
    }
    catch (error) { }
}
exports.runSafely = runSafely;
async function runAsyncSafely(func) {
    try {
        return await func();
    }
    catch (error) { }
}
exports.runAsyncSafely = runAsyncSafely;
