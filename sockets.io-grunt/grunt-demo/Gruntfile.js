// The code above configures the Grunt task runner to use the 'cssmin' plugin.
// It sets up the task to minify the CSS file 'css/main.css' and output the minified version to 'css/min/main.min.css'.
// Grunt may produce production ready code, here just type grunt to run the development pipe and run grunt build
// to produce the production code

module.exports = function(grunt){
    grunt.initConfig({
        cssmin: {
            development: {
                files: {
                    'css/min/main.min.css': 'css/main.css'
                }
            }
        },
        uglify: {
            development: {
                /*
                files: {
                    'js/min/app.min.js': [
                        'js/utility.js', 
                        'js/main.js'
                    ]
                }*/
                // single files 
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: ['*.js'],
                        dest: 'js/min',
                        ext: '.min.js'
                    }
                ],
                options: {
                    sourceMap: true
                }
            },
            build: {
                files: {
                    'js/min/app.min.js': 'js/*.js'
                },
                options: {
                    sourceMap: false
                }
            }
        },
        watch: {
            js: {
                files: 'js/*.js',
                tasks: ['uglify:development']
            },
            css: {
                files: 'css/*.css',
                tasks: ['cssmin:development']
            }
        }
    });

    grunt.registerTask('development', [
        'uglify:development', 'cssmin:development', 'watch'
    ]);

    grunt.registerTask('build', [
        'uglify:build', 'cssmin:development'
    ]);

    grunt.registerTask('default', [
        'development'
    ])

    // Load the 'cssmin' plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
}

/*
This Gruntfile.js sets up the cssmin task to minify the 'css/main.css' file and 
output the minified version to 'css/min/main.min.css'. 
The cssmin task is loaded using the grunt.loadNpmTasks() method, which loads 
the necessary Grunt plugin for the task to work.
*/