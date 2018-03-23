var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');
var open = require("gulp-open");
var rename = require("gulp-rename");
require('shelljs/global');

var options = {}
gulp.task('deploy', function () {
    return gulp.src('./preview/**/*')
        .pipe(gp_deploy(options));
});

gulp.task('rename',function () {
	if (exec('cp ./preview/README.html ./preview/index.html').code !== 0) {
	  echo('Error: rename exec failed');
	  exit(1);
	}	
});

gulp.task('generate',function () {
	// Run external tool synchronously
	if (exec('sh ./generate.sh').code !== 0) {
	  echo('Error: generate.sh exec failed');
	  exit(1);
	}	
});

gulp.task('show',['generate'] ,function () {
    console.log('show');
});

gulp.task('default',['generate', 'rename', 'deploy'] ,function () {
    console.log('default');
});