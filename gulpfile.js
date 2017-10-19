"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var svgSprite = require("gulp-svg-sprite");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var server = require("browser-sync").create();
var del = require("del");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
});

var configBG = {
  shape: {
    dimension :{

    },
    spacing: {
      padding : 240,
      box : 'content'
    }
  },
  mode: {
    view: { //Activate the "css" mode
      bust: false,
      sprite: "../sprite/sprite.svg"
    },
  },
};

var configInl = {
  shape: {
    spacing: {
      padding : 0
    }
  },
  mode: {
    symbol: {
      sprite: "../../img/sprite/sprite-symbol.svg"
    },
  },
};

gulp.task("inlineSprite", function() {
  return gulp.src("img/inline/*.svg")
    .pipe(svgSprite(configInl))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("bgSprite", function() {
  return gulp.src("img/bg/*.svg")
    .pipe(svgSprite(configBG))
    .pipe(rename("sprite-bg.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("images", function(){
  return gulp.src("img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("webp", function() {
  return gulp.src("img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("img"))
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html"]);
});

gulp.task("copy", function () {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", function (done) {
  run("clean", "copy", "style", "inlineSprite", "bgSprite", done);
});


