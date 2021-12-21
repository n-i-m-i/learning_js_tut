//Common Js, every file is a module (by default)
//Module - encapsulated code(only share minimum)
const names = require('./name');
 const sayHi = require('./util');

 const data = require('./6-alternative-flavour');
require('./6-mind-grenade');


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)