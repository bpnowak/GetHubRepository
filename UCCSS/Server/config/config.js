var path = require('path'),    
       rootPath = path.normalize(__dirname + '/..'),    
       env = process.env.NODE_ENV || 'development';

var config = {  
        test: {
            root: rootPath,
            app: { name: 'UCCSS' },
            port: 4000,
        },
        
       development: {    
                   root: rootPath,    
                   app: {      name: 'UCCSS'    },    
                   port: 5000,  
        },  
        production: {    
                     root: rootPath,    
                     app: {      name: 'UCCSS'    },    
                      port: 80,  }
         };

module.exports = config[env];
