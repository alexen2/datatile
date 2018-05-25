var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	flatten = require('gulp-flatten'),
	runSequence = require('run-sequence'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	reload = browserSync.reload;

var params = {
	out: 'build',
	images: 'build/images',
	js: 'build/js',
	css: 'build/css',
	fonts: 'build/fonts'
}

//gulp.task('default', ['pug', 'sass', 'resources-js', 'resources-css', 'resources-fonts', 'images', 'js', 'server']);

gulp.task('default', function(callback) {
	runSequence('clean', 'pug', 'sass', 'resources-js', 'resources-css', 'resources-fonts', 'images', 'js', 'server', callback);
});

gulp.task('pug', function(){
	return gulp.src('src/pages/*.pug')
	    .pipe(pug({
	    	pretty: true
	    }))
	    .pipe(gulp.dest(params.out));
});

gulp.task('sass', function(){
	return gulp.src('src/sass/style.scss')
	    .pipe(sass())
	    .pipe(autoprefixer({
	        browsers: ['last 2 versions'],
	        cascade: false
	    }))	       
			.pipe(sass({outputStyle: 'compressed'}))
	    .pipe(gulp.dest(params.css))
});

gulp.task('resources-js', function(){
	return gulp.src('src/resources/**/*.js')
		.pipe(gulp.dest(params.out))
});

gulp.task('resources-css', function(){
	return gulp.src('src/resources/**/*.css')
		.pipe(gulp.dest(params.out))		
});

gulp.task('resources-fonts', function(){
	return gulp.src('src/resources/**/*.{eot,svg,ttf,woff,woff2,otf}')
		.pipe(gulp.dest(params.out))
});


gulp.task('images', function(){
	return gulp.src('src/blocks/**/*.{png,jpg,jpeg,svg,gif}')
		.pipe(flatten())
		.pipe(imagemin())
		.pipe(gulp.dest(params.images))
});

gulp.task('js', function(){
	gulp.src(['src/blocks/**/*.js'])
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest(params.js))
	.pipe(reload({stream: true}));
});

gulp.task('server', function(){
	browserSync.init({
		server: params.out
	});

	gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/blocks/**/*.{png,jpg,jpeg,svg}', ['images']);
	gulp.watch('src/blocks/**/*.js', ['js']);
});

gulp.task('clean', function(){
	del('build/**/*');
});