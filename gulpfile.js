var gulp = require('gulp');
var server = require('gulp-webserver');
var path = require('path');
var fs = require('fs');
var url = require('url');
var data = require('./src/data/data.json');
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            open: true,
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon') {
                    return false
                }
                pathname = pathname === '/' ? '/index.html' : pathname;
                console.log(pathname)
                if (pathname === "/app/list") {
                    res.end(JSON.stringify(data))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})