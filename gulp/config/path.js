import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./public`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		image: `${buildFolder}/img/`,
		scss: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		svg: `${buildFolder}/svg/`,
		faviconPath: `${buildFolder}/img/favicon/`,
	},
	public: {
		js: `${buildFolder}/js/`,
		image: `${buildFolder}/img/`,
		scss: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		svg: `${buildFolder}/svg/`,
		faviconPath: `${buildFolder}/img/favicon/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		image: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,mp4}`,
		svg: `${srcFolder}/svg/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/pages/*.pug`,
		faviconPath: `${srcFolder}/img/favicon/*.{png,svg,ico}`,
	},
	watch: {
		image: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp,svg,ico,mp4}`,
		js: `${srcFolder}/**/*.js`,
		scss: `${srcFolder}/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		svg: `${srcFolder}/svg/**/*.svg`,
		faviconPath: `${srcFolder}/img/favicon/*.{png,svg,ico}`,
	},
	public: {
		css: '',
		fonts: '',
		img: '',
		js: '',
		svg: '',
		html: '',
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
