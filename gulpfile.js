var gulp=require('gulp');
var connect =require('gulp-connect');//用来查看gulp 端口操作的模块

gulp.task('connect', function() {
    connect.server();
  });
  
   gulp.task('default', ['connect']);
