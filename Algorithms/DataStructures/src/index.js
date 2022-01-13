var filename = "./".concat(process.argv[2], ".js");
try {
    var file = require(filename);
    var node = new file.exec("Item");
    console.log(node);
}
catch (e) {
    throw e;
}
