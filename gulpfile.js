// ----------------------------
// Include Dependencies 
// ----------------------------

var gulp 			= require('gulp');
var sass 			= require('gulp-sass');


// ----------------------------
// Define Paths
// ----------------------------

var paths = {
	sass_watch: './src/assets/styles/**/*.scss',
	sass_main: './src/assets/styles/style.scss'
};

// ----------------------------
// Define Gulp Sass Task
// ----------------------------

gulp.task('sass', function() {
  gulp.src(paths.sass_main)
    .pipe(sass())
    .pipe(gulp.dest('./src/assets/styles/'))
});



// -------------------------
// Set up our default tasks
// ----------------------------

gulp.task('default', function(){
	gulp.start('sass')
	gulp.watch(paths.sass_watch,['sass']); 
}); 