import natsortLib from "natsort";
const natsort = natsortLib.default; //this works
// import natsort from 'natsort' // this does NOT work
// const natsort = require('natsort').default // this does work

const thing = ['a', 1].sort(natsort({ insensitive: true }))
console.log(thing);
console.log('fun');