module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'copy', 'watch'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({
        watch: {
            files: [
                './careers/*.{html,json}',
                './css/careers/*.{css,scss}',
                './css/bootstrap.css',
                './js/**/*.js',
                'Gruntfile.js'
            ],
            tasks: [
                'clean',
                'copy'
            ],
            options: {
                spawn: false
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './careers/*.{html,json}' ],
                    dest: './dest/careers',
                    cwd: './careers'
                }, {
                    expand: true,
                    src: [ './js/**/*.js' ],
                    dest: './dest/js',
                    cwd: './js'
                }, {
                    expand: true,
                    src: [ './css/careers/*.{css,scss}' ],
                    dest: './dest/css/careers',
                    cwd: './css/careers'
                }, {
                    expand: true,
                    src: [ './css/bootstrap.css' ],
                    dest: './dest/css',
                    cwd: './css'
                }
                ]
            }
        },

        clean: ['./dest']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

};