var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task(
  "serve",
  gulp.series("sass", () => {
    //gulp.series("", function () {
    browserSync.init({
      server: "./app/",
      browser: ["google chrome", "firefox"]
    });

    gulp.watch("scss/*.scss", gulp.series("sass"));
    gulp.watch("app/*.html").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
