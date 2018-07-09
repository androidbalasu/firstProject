//EventEmitter is a class.
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();
//Register a listener
logger.on('messageLogged', (eventArgs)=> console.log(`Listner called. Args sent are ${eventArgs.message}`));

logger.log('File read completed');


