"use strict";
const filename = `./${process.argv[2]}.js`;
try {
    const file = require(filename);
    const node = new file.exec("Item");
    console.log(node);
}
catch (e) {
    throw e;
}
//# sourceMappingURL=index.js.map