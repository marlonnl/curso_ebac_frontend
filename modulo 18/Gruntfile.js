const { option } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        },

        watch: {
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less:production']
            },
            uglify: {
                files: ['src/scripts/*.js'],
                tasks: ['uglify']
            }
        }

    });

    // pacotes
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production'], ['uglify']);
}

