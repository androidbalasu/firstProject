const EventEmitter = require('events');

    var url = 'http://mylogger.io/log';

    console.log(__filename);
    console.log(__dirname);

class Logger extends EventEmitter{
    log(message){
        //Send http request.
        console.log(message);
        this.emit('messageLogged', {message: message});
    }
}    
    

module.exports = Logger;
