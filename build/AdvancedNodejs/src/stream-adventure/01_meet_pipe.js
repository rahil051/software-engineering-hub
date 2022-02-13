"use strict";
const fs = require('fs');
const file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
//# sourceMappingURL=01_meet_pipe.js.map