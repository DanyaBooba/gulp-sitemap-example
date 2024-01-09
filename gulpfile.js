const fs = require("fs");

const pages = JSON.parse(fs.readFileSync("pages.json", "utf8"));

const gulp = require("gulp");

const feed = require("@zadkiel/gulp-feed");

const posts = pages;

const options = {
	transform: (post) => post,
	render: {
		"rss.xml": "rss2",
	},
};

//
// Default Task
//

exports.default = gulp.series(function () {
	feed(posts, options).pipe(gulp.dest("assets/"));
});
