module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env: {
            dev: {
                NODE_ENV: 'development'
            },
            production: {
                NODE_ENV: 'production'
            }
        },

        nodemon: {
            dev: { script: 'index.js' }
        },

        


    });

    
    grunt.loadNpmTasks('grunt-contrib-nodemon');
    

    grunt.registerTask('default', [
        'nodemon'
    ]);
    grunt.registerTask('production', [
        'env:production',
        'nodemon'
    ]);


};
