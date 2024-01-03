export async function runSafely(func: Function) {
    try { return func(); } catch (error) { }
}

export async function runAsyncSafely(func: Function) {
    try { return await func(); } catch (error) { }
}