
var topdown = require('../topdown');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      project: {
        src: [
          'client/src/script.js',
          'client/src/render.js'
        ],
        dest: 'client/script.js',
        options: {
          aliasMappings: {
            cwd: 'client/src',
            src: ['**/*.js']
          },
          external: topdown.modules.moduleList()
        }
      }
    },
    uglify: {
      client: {
        files: {
          'public/script.min.js': [ 'client/script.js' ]
        },
        options: {
          sourceMap: true
        },
      },
    },
    watch: {
      build: {
        files: ['client/src/**/*.js'],
        tasks: ['browserify', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'def', [
    'browserify', 'uglify', 'watch'
  ]);

};