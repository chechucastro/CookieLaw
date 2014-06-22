module.exports = function(grunt) {

  grunt.initConfig({
    project: {
      name: "cookielaw"
    },
    uglify: {
      def : {
        files:
        {
          'dist/js/min/<%= project.name %>.min.js' : 'js/<%= project.name %>.js',
          'dist/js/<%= project.name %>.js' : 'js/<%= project.name %>.js'
        }
      }
    },
    stylus: {
      compile : {
        files : {
          'dist/css/<%= project.name %>.css' : 'styl/*.styl'
        }
      }
    },
    cssmin : {
      dist : {
        src: ['dist/css/cookielaw.css'],
        dest: 'dist/css/cookielaw.min.css'
      }
    },
    watch: {
      def: {
        files: [
        'js/*.js','styl/*.styl'
        ]
        , tasks: ['newer:uglify','stylus','cssmin']
        , options : {
          spawn : false,
          livereload: true,
        }
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');


  grunt.registerTask('default', ['watch:def']);
  grunt.registerTask('js-task', ['uglify']);
};
