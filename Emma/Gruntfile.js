module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'style/style.scss'
				}
			}
		},
		
		'ftp-deploy': {
			build: {
				auth: {
				host: '160.153.162.21',
				port: 21,
				authKey: 'key1'
    		},
			src: 'images',
			dest: '/images'
  			}
		},
		
		execute: {
	        target: {
	            src: [
					'js/fileList.js'
	            ]
	        }
    	},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
			
		}
            			
	});
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-execute');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['execute', 'sass', 'ftp-deploy', 'watch']);
}