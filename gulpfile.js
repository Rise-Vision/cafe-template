// ----------------------------
// Include Dependencies 
// ----------------------------

var gulp 			= require('gulp');
var browserSync     = require('browser-sync');
var reload			= browserSync.reload;
var sass 			= require('gulp-sass');

//-----------------------------------------
//Browser-sync task for starting the server
//-----------------------------------------

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});


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
    .pipe(reload({stream:true}));
});


// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});





// -------------------------
// Set up our default tasks
// ----------------------------

gulp.task('default', ['browser-sync'], function(){
	gulp.start('sass')
	gulp.watch(paths.sass_watch,['sass']); 
	gulp.watch("*.html", ['bs-reload']);
}); 