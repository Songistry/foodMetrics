module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    // keepalive: true,
                    base: {
                        path: './',
                        options: {
                            index: 'src/index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        concat: {
            options: {
                sourceMap: true
            },
            comps: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/bootstrap/dist/css/bootstrap-theme.css'
                ],
                dest: 'build/components/components.css'
            },
            styles: {
                src: ['build/assets/css/*.css'],
                dest: 'build/assets/styles.css'
            },
            component_js: {
                src: ['bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/highcharts/highcharts.src.js'
                ],
                dest: 'build/components/components.js'
            },
            js: {
                src: ['src/**/*.js'],
                dest: 'build/app.js'
            }
        },
        ngAnnotate: {
            js: {
                files: {
                    'build/app.js': ['build/app.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '(c) 2015 Mike Cottingham'
            },
            build: {
                files: {
                    'dist/components.min.css': ['build/components/components.css'],
                    'dist/styles.min.css': ['build/assets/styles.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            components_build: {
                src: ['build/components/components.js'],
                dest: 'dist/components.min.js'
            },
            js: {
                src: ['build/app.js'],
                dest: 'dist/app.min.js'
            }
        },
        less: {
            styles: {
                options: {
                    paths: ['src']
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.less'],
                    dest: 'build/assets/css',
                    ext: ".css"
                }]
            }
        },
        watch: {
            less: {
                files: 'src/**/*.less',
                tasks: ['less'],
                options: {
                    interrupt: true
                }
            },
            js: {
                files: 'src/**/*.js',
                tasks: 'build',
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['less', 'concat', 'cssmin', 'ngAnnotate', 'uglify', 'connect', 'watch']);
    grunt.registerTask('build', ['concat:js', 'ngAnnotate', 'uglify:js']);
};
