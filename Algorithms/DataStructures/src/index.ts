const filename = `./${process.argv[2]}.js`;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const file = require(filename);
const node = new file.exec("Item");
console.log(node);