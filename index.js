import natsortLib from "natsort";
const natsort = natsortLib.default; //this works

// import natsort from 'natsort' // this does NOT work
// TypeError: natsort is not a function

// const natsort = require('natsort').default // this does work in ours but doesn't work here.
// ReferenceError: require is not defined in ES module scope, you can use import instead
// This file is being treated as an ES module because it has a '.js' file extension and '/Users/courey/dev/esm-experiment/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

const thing = ['a', 1].sort(natsort({ insensitive: true }))
console.log(thing);
console.log('fun');