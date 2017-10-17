"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

var imagemin = require("gulp-imagemin");

gulp.task("images", function(){
  return gulp.src("img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("img"));
});

var webp = require("gulp-webp");

gulp.task("webp", function() {
  return gulp.src("img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("img"))
});

var svgSprite = require("gulp-svg-sprite");

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
    .pipe(gulp.dest("img"));
});

gulp.task("bgSprite", function() {
  return gulp.src("img/bg/*.svg")
    .pipe(svgSprite(configBG))
    .pipe(rename("sprite-bg.svg"))
    .pipe(gulp.dest("img"));
});
