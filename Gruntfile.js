module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'prod/assets/img/'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    'prod/assets/css/screen.min.css': ['assets/css/screen.css']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'assets/css'
                }
            }
        },
        /*sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'css/screen.css': 'sass/screen.scss'
                }
            }
        },*/
        processhtml: {
            build: {
                files: {
                    'prod/index.html': ['index.html'],
                    'prod/about.html': ['about.html'],
                    'prod/404.html': ['404.html'],
                    'prod/dept1.html': ['dept1.html'],
					'prod/dept2.html': ['dept2.html'],
                    'prod/contacts.html': ['contacts.html'],
                    'prod/contacts.html': ['mc.html']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['favicon.ico'], dest: 'prod/', filter: 'isFile'},
                    {expand: true, src: ['assets/js/main.min.js'], dest: 'prod/', filter: 'isFile'},
                    {expand: true, src: ['assets/js/vendor/*'], dest: 'prod/', filter: 'isFile'},
					{expand: true, src: ['assets/img/*.svg'], dest: 'prod/', filter: 'isFile'}
                ],
            },
        },
        watch: {
            options: { livereload: true, },
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass']
            },
            html: {
                files: ['*.html','**/*.css']
            }
        },
        uncss: {
            dist: {
                files: {
                    'css/tidy.css': ['index.html']
                }
            }
        },
        inlineImgSize: {
            files: {
                src: ['index.html', 'contact.html', '404.html', 'dept1.html', 'dept2.html', 'about.html','mc.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-inline-imgsize');

    grunt.registerTask('default', ['compass', 'uglify', 'imagemin', 'cssmin', 'processhtml', 'copy']);
    grunt.registerTask('landing', ['compass', 'uglify', 'imagemin', 'uncss', 'cssmin', 'processhtml', 'copy']);

};