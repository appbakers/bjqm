module.exports = function(grunt) {
  var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
  banner += '- <%= pkg.description %>\n<%= pkg.repository.url %>\n';
  banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        maxlen: 80,
        quotmark: 'single'
      },
      dev: ['gruntfile.js', 'test/spec/*.js'],
      app: ['public/js/*.js',
        'public/js/app/helpers/*.js',
        'public/js/app/models/*.js',
        'public/js/app/routers/*.js',
        'public/js/app/views/*.js',
      ]
    },
    concat: {
      options: {
        separator: ';\n',
        banner: banner
      },
      build: {
        files: [{
          src: ['src/*.js'],
          dest: 'build/<%= pkg.name %>.js'
        }]
      },
    },
    uglify: {
      options: {
        banner: banner,
      },
      build: {
        files: {
          'build/<%= pkg.name %>.min.js': ['build/<%= pkg.name %>.js']
        }
      }
    },
    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {
        src: ['test/spec/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['gruntfile.js', 'src/*.js', 'tests/**/*.js'],
        tasks: ['development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', ['simplemocha']);
  grunt.registerTask('default', ['simplemocha', 'concat', 'uglify']);
};
