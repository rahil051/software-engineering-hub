"use strict";
const filename = `./${process.argv[2]}.js`;
const file = require(filename);
const node = new file.exec("Item");
console.log(node);
//# sourceMappingURL=index.js.map