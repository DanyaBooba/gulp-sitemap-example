const gulp = require("gulp");
const sitemap = require("gulp-sitemap");
const sitemapFiles = require("gulp-sitemap-files");

function get_sitemap() {
	return gulp
		.src("src/**/*.html", {
			read: false,
		})
		.pipe(
			sitemap({
				siteUrl: "https://news.dybka.ru",
				changefreq: "weekly",
				priority: "0.5",
			})
		)
		.pipe(gulp.dest("dist"));
}

//
// Default Task
//

exports.default = get_sitemap;
