'use strict';


module.exports = (grunt) => {

    grunt.initConfig({
        eslint: {
            src: [
                'Gruntfile.js',
                'server.js',
                'config/**/*.js',
                'controllers/**/*.js',
                'helpers/**/*.js',
                'lib/**/*.js',
                'models/**/*.js',
                'test/**/*.js'
            ],
            options: {
                configFile: '.eslintrc'
            }
        },

        mochaTest: {
            test: {
                src: ['test/**/*.js'],
                options: {
                    reporter: 'spec',
                    timeout: 5000
                }
            }
        },

        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },

        watch: {
          express: {
            files: ['<%= eslint.src %>'],
            tasks: ['eslint', 'express'],
            options: {
                spawn: false
            }
          }
        }
    });

    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', ['eslint', 'mochaTest']);
    grunt.registerTask('serve', ['eslint', 'express']);
    grunt.registerTask('test-watch', ['eslint', 'mochaTest', 'watch']);
    grunt.registerTask('default', ['eslint', 'express', 'watch']);

};
