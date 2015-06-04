// Main Gulp Files

// Package include ----------------------------------------------------------------------------------------------------------->>
var gulp = require('gulp'),
    newer = require('gulp-newer'),
    size = require('gulp-size'),
    less = require('gulp-less'),
    pleeease = require('gulp-pleeease'),
    imagemin = require('gulp-imagemin'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    del = require('del'),
    browsersync = require('browser-sync'),
    config = require('./config');


// File Location ------------------------------------------------------------------------------------------------------------->>
var
  dest = 'public/',  // target output file
  devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production' ),  // check for dev or prod build
  // Image input and their output folder when build
  images = {
    in: 'assets/images/**/*',
    out: dest + 'images/'
  },
  // customs fonts include -- would prefer to call google api for font instead, but well in case it is not in google fonts.
  fonts = {
    in: ['assets/fonts/**/*', 'bower_components/bootstrap/fonts/**/*'],
    out: dest + 'fonts/'
  },
  // css/less source input and output css file folder
  css = {
    in: "styles/styles.less",
    out: dest + 'css/',
    watch: ['styles/**/*'],
    pleeeaseOpts: {
      autoprefixer: {browsers: ['last 2 versions', '> 2%']},
      rem: ['16px'],
      pseudoElements: true,
      mqpacker: true,
      minifier: !devBuild
    }
  },
  // js input source file (can be multiple, put in sequence if needed) and its output folder
  js = {
    in: ["js/main.js"],
    out: dest + 'js/',
    filename: 'main.js'
  },
  // plugins source files (put in seq if there is dependecies) and its output folder
  plugins = {
    js: {
      in: [
        'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
      ],
      out: dest + 'js/',
      filename: 'plugins.js'
    },
    css: {
      in: [
        'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
      ],
      out: dest + 'css/',
      filename: 'plugins.css'
    }
  },
  // browsersync sync options
  syncOpts = {
    proxy: 'http://localhost:' + config.express.port,
    open: false,
    notify: true
  };



// All Tasks --------------------------------------------------------------------------------------------------------------->>


// delete all contents of public/build folder
gulp.task('clean', function(){
  del([
    dest + '*'
    ]);
});

// Copy the customs fonts to the public/build folder
gulp.task('fonts', function(){
  return gulp.src(fonts.in)
    .pipe(gulp.dest(fonts.out));
});

// copy all image to public folder
gulp.task('images', function(){
  return gulp.src(images.in)
  .pipe(newer(images.out))
  .pipe(size({title: 'images in'}))
  .pipe(imagemin())
  .pipe(size({title: 'images out'}))
  .pipe(gulp.dest(images.out));
});

// Concat all the plugins to public/build folder --- js files
gulp.task('plugins.js', function(){
  return gulp.src(plugins.js.in)
    .pipe(concat(plugins.js.filename))
    .pipe(gulp.dest(plugins.js.out));
});

// Concat all the plugins to public/build folder --- css files
gulp.task('plugins.css', function(){
  return gulp.src(plugins.css.in)
    .pipe(concat(plugins.css.filename))
    .pipe(gulp.dest(plugins.css.out));
});

// compiling less file to css
gulp.task('css', function(){
  return gulp.src(css.in)
    .pipe(less())
    .pipe(pleeease(css.pleeeaseOpts))
    .pipe(gulp.dest(css.out))
    .pipe(browsersync.reload({stream:true}));
});

// concat all the js files to public/build folder
gulp.task('js', function(){
  return gulp.src(js.in)
    .pipe(print())
    .pipe(concat(js.filename))
    .pipe(gulp.dest(js.out));
});

// run browser-sync
gulp.task('browsersync', ['nodemon'], function(){
  browsersync(syncOpts);
});

// run nodemon
gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    ignore: ['node_modules/**/*', 'js/**/*']
  })
  .on('restart', function () {
    console.log('restarted!');
  });
});


// default task ---------------------------------------------------------------------->
gulp.task('default', ['images', 'fonts', 'css' ,'js', 'plugins.js', 'plugins.css', 'browsersync'], function(){

  // usually put the watcher here ....

  // image watcher
  gulp.watch(images.in , ['images']);

  // fonts watcher
  gulp.watch(fonts.in, ['fonts']);

  // less watcher
  gulp.watch(css.watch, ['css']);

  // lib js watcher
  gulp.watch(js.in, ['js', browsersync.reload]);

  // jade watcher
  gulp.watch(['views/**/*.jade'], browsersync.reload);

});
