const os = require('os');


//info bout current user
const user = os.userInfo();
console.log(user); 

//returns the system uptime in seconds
console.log(`System Uptime is: ${((os.uptime())/60)/60} hrs`);

const currentOS ={
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem()
}

console.log(currentOS);