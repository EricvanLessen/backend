module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            main: {
                src: ['typescript/*.ts'], // src argument, an array of TS files that are turned into JS files
                // dest:'javascript/', // folder where the JS files are send
                outFile: 'javascript/main.js' // combined output
            }
        }
    })

    grunt.registerTask('default', ['ts']);
}

