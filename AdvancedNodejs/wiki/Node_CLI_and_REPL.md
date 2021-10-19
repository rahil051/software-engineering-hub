# Node.js CLI and REPL

## REPL
stands for
- Read
- Evaluate
- Print
- Loop

Running a `node` command in the shell loads the REPL, in which we can execute node.js scripts

REPL is a great environment to execute node.js scripts/commands etc for testing them out before making them into your actual code.

### REPL's autocomplete

Pressing `tab` key 2 times on a blank REPL will invoke a list of available Global object functions. This is basically an autocomplete feature, which also works for basic javascript functions. For example if we type;
```bash
$ node
> const arr = [1, 2, 3]; # hit enter
undefined
> arr.f # enter a partial function name and then press tab
arr.fill  arr.filter  arr.find  arr.findIndex  arr.flat  arr.flatMap  arr.forEach
```
we will get a list of available array functions starting with `f`.

### Accessing Node's Global functions using REPL
The list of ever growing node's global functions

```bash
$ node -v
v14.18.1

$ node
> global. # hit tab 2 times
global.__proto__             global.hasOwnProperty        global.isPrototypeOf         global.propertyIsEnumerable  global.toLocaleString        global.toString              global.valueOf

global.constructor

global.Array                 global.ArrayBuffer           global.Atomics               global.BigInt                global.BigInt64Array         global.BigUint64Array        global.Boolean               global.Buffer ...

# and a lot more below
```

### REPL's reverse search feature
Using the reverse search feature, we can navigate back to previous commands
```bash
$ node
Welcome to Node.js v14.18.1.
> const msg = "hello node"
undefined
> msg.substr("node")
'hello node'
> msg.substr("node")
bck-i-search: substr_ # use Ctrl+R to activate reverse search and enter the keywords to look-up for the previously entered statements/scripts
```

Note: The `CTRL+R` only works directly in linux and MacOS, but doesn't work in Windows. To make it work in Windows, we need to install the `rlwrap` utility. Then use the following command to activate it
```bash
$ NODE_NO_READLINE=1 rlwrap node
```

### REPL's other useful handy features

- Use `_` (underscore) to bring up the last evaluated value into the console.
- To access REPL's special commands, enter `.` (period/dot) and hit tab to bring the commands up.
- `.help` will bring up a list of useful commands like `.break` to break out of a script, `.load` to load a nodejs script within REPL, `.editor` to bring up an editor to write multiline scripts and etc.

### Initiating REPL's customized sessions
Using the REPL node.js module, we can write a script to initiate a customized REPL session based on our custom rules and inputs

```javascript
// repl.js
const repl = require('repl'); // require the REPL module

// repl.start initiates a REPL session
let replSession = repl.start({
    ignoreUndefined: true, // default: false
    useColors: true, // default: false
    replMode: repl.REPL_MODE_STRICT // enables 'use strict'
});

// to require libraries into the new session, assign them to the replSession.context variable
replSession.context.lodash = require('lodash');
```
now execute the script to bootstrap a new REPL session
```bash
$ node repl.js
> let a
> lodash.isNull(a)
```