module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
				jshintrc: '.jshintrc'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		// qunit: {
		//   files: ['test/**/*.html']
		// },
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: false,
					sourcemap: false
				},
				files: {
					'dist/css/main.min.css': 'src/sass/main.scss'
				}
			},
		
		},
		jshint: {
			files: ['Gruntfile.js', 'src/js/*.js', 'test/js/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					//   console: true,
					//   module: true,
					//   document: true
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: [
					'src/sass/*.scss'
				],
				tasks: ['sass']
			},

			js: {
				files: [
					'src/js/*.js'
				],
				tasks: ['jshint']
			},
			html: {
				files: [
					'**/*.html'
				]
			}
		},
		clean: {
			dist: [
				'dist/css/main.min.css',
				'dist/js/main.min.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// grunt.registerTask('test', ['jshint', 'qunit']);

	// grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'sass']);
	//@todo: add back in uglify later
	grunt.registerTask('default', ['clean', 'sass', 'concat', 'uglify']);

	grunt.registerTask('dev', [
		'watch'
	  ]);

};