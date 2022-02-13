"use strict";
const { Readable } = require("stream");
class ReadableStream extends Readable {
    _read(size) { }
}
const stream = new ReadableStream();
stream.push(process.argv[2]);
stream.pipe(process.stdout);
//# sourceMappingURL=04_read_it.js.map