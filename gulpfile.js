const gulp = require("gulp");

const feed = require("@zadkiel/gulp-feed");

// const sitemap = require("gulp-sitemap");

// const fs = require("fs");
// const turbo = require("turbo-rss");

// var feed = new turbo({
// 	title: "Название",
// 	link: "https://example.com",
// 	description: "Описание",
// 	language: "ru",
// });

// feed.item({
// 	title: "Заголовок",
// 	image_url: "example.jpg",
// 	image_caption: "Подпись",
// 	url: "https://news.dybka.ru/example/",
// 	author: "Даниил Дыбка",
// 	pubDate: "Mon, 1 Jan 2024 12:00:00 GMT",
// 	content: "КОНТЕНТ",
// 	menu: [
// 		{
// 			link: "https://news.dybka.ru",
// 			text: "Читать",
// 		},
// 		{
// 			link: "https://news.dybka.ru/tech",
// 			text: "Техника",
// 		},
// 		{
// 			link: "https://news.dybka.ru/updates",
// 			text: "Проекты",
// 		},
// 		{
// 			link: "https://news.dybka.ru/games",
// 			text: "Игры",
// 		},
// 		{
// 			link: "https://news.dybka.ru/sundry",
// 			text: "Разное",
// 		},
// 	],
// });

// const xml = feed.xml();

const posts = [gulp.src("src/**/*.html")];

const options = {
	transform: (post) => post,
	render: {
		"mysuperrss.xml": "rss2",
	},
};

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

exports.default = gulp.series(function () {
	feed(posts, options).pipe(gulp.dest("assets/"));
});

// var frontMatter = require("gulp-front-matter");
// var rss = require("gulp-rss");

// gulp.task("rss", function () {
// 	gulp
// 		.files("./posts/*.md") // Read input files
// 		.pipe(frontMatter()) // Extract YAML Front-Matter
// 		.pipe(
// 			rss(
// 				// Generate RSS data
// 				// Configuration
// 				{
// 					// How we deal with contextual data (typically Front-Matter)
// 					properties: {
// 						data: "frontMatter", // name of property containing the data, typically extracted front-matter
// 						// Proparty names mapping
// 						title: "title", // post's title (means plugin will read `file.frontMatter.title`, mandatory)
// 						link: "permalink", // post's URL (mandatory)
// 						description: "description", // post's description (optional)
// 						author: "author", // post's author (optional)
// 						date: "date", // post's publication date (mandatory, default = now)
// 						image: "image", // post's thumbnail (optional)
// 					},

// 					// Feed configuration
// 					render: "atom-1.0", // Feed type (atom-1.0 or rss-2.0)
// 					title: "My blog", // Feed title (mandatory)
// 					description: "My very own blog", // Feed description (optional)
// 					link: "http://my.bl.og", // Feed link (optional)
// 					author: { name: "Nicolas Chambrier" }, // Blog's author (optional)
// 					// etc…
// 				}
// 			)
// 		)
// 		.pipe(gulp.dest("./public/feed.xml")); // Write output
// });
