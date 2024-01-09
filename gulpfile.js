const gulp = require("gulp");
const sitemap = require("gulp-sitemap");

function get_sitemap() {
	return gulp
		.src("src/**/*.html", {
			read: false,
		})
		.pipe(
			sitemap({
				siteUrl: "https://news.dybka.ru",
			})
		)
		.pipe(gulp.dest("dist"));
}

//
// Default Task
//

exports.default = get_sitemap;
