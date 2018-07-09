//EventEmitter is a class.
const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', ()=> console.log('Listner called'));

//Raise an event
emitter.emit('messageLogged');

