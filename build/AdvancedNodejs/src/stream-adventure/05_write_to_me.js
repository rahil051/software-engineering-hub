"use strict";
const { Writable } = require("stream");
class WritableStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(`writing: ${chunk.toString()}`);
        callback();
    }
}
const stream = new WritableStream();
process.stdin.pipe(stream);
//# sourceMappingURL=05_write_to_me.js.map