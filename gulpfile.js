var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');


paths = {
	'npm': './node_modules'
};

//Copy, compile, minify all scripts
function scripts(done) {
	gulp.src([
		paths.npm + '/jquery/dist/jquery.js',
		paths.npm + '/materialize-css/dist/js/materialize.min.js',
		paths.npm + '/jquery-validation/dist/jquery.validate.js',
		paths.npm + '/jquery-ui-dist/jquery-ui.min.js',
		paths.npm + '/popper.js/dist/umd/popper.js',
		paths.npm + '/bootstrap/dist/js/bootstrap.js',
		paths.npm + '/jquery-slimscroll/jquery.slimscroll.min.js',
		paths.npm + '/node-waves/dist/waves.js',
		paths.npm + '/bootstrap-sweetalert/dist/sweetalert.min.js',
		paths.npm + '/jquery-countto/jquery.countTo.js',
		paths.npm + '/jquery-sparkline/jquery.sparkline.min.js',
		paths.npm + '/moment/min/moment.min.js',
		paths.npm + '/bootstrap-notify/bootstrap-notify.min.js',
		paths.npm + '/jquery-nestable/jquery.nestable.js',
		paths.npm + '/owl.carousel/dist/owl.carousel.min.js',
		paths.npm + '/materialize-css/extras/noUiSlider/nouislider.min.js',
	])
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};

//Copy, compile, minify all chart script
function chart(done) {
	gulp.src([
		paths.npm + '/morris.js/morris.js',
		paths.npm + '/raphael/raphael.min.js',
		paths.npm + '/chart.js/dist/Chart.bundle.js',
		paths.npm + '/jquery-knob/dist/jquery.knob.min.js',
	])
		.pipe(concat('chart.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};

//Copy, compile, minify all form script
function form(done) {
	gulp.src([
		paths.npm + '/autosize/dist/autosize.js',
		paths.npm + '/inputmask/dist/min/jquery.inputmask.bundle.min.js',
		paths.npm + '/jquery.spinner/dist/js/jquery.spinner.js',
		paths.npm + '/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
		paths.npm + '/nouislider/distribute/nouislider.js',
		paths.npm + '/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js',
		paths.npm + "/select2/dist/js/select2.min.js",
		paths.npm + "/flatpickr/dist/flatpickr.min.js",
	])
		.pipe(concat('form.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};

//Copy, compile, minify all table script
function table(done) {
	gulp.src([
		paths.npm + '/datatables.net/js/jquery.dataTables.min.js',
		paths.npm + '/datatables.net-bs4/js/dataTables.bootstrap4.min.js',

	])
		.pipe(concat('table.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};

//Copy, compile, minify all map script
function map(done) {
	gulp.src([
		paths.npm + '/gmaps/gmaps.js',
		paths.npm + '/jqvmap/dist/jquery.vmap.min.js',
		paths.npm + '/jqvmap/dist/maps/jquery.vmap.world.js',
		paths.npm + '/jqvmap/dist/maps/jquery.vmap.usa.js',
		paths.npm + '/jqvmap/dist/maps/jquery.vmap.russia.js',
		paths.npm + '/jqvmap/dist/maps/jquery.vmap.europe.js',
		paths.npm + '/jqvmap/dist/maps/jquery.vmap.germany.js',
	])
		.pipe(concat('map.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};

//Copy, compile, minify all plugins styles
function style(done) {
	return gulp.src([
		paths.npm + '/materialize-css/dist/css/materialize.min.css',
		paths.npm + '/bootstrap/dist/css/bootstrap.css',
		paths.npm + '/simple-line-icons/css/simple-line-icons.css',
		paths.npm + '/node-waves/dist/waves.css',
		paths.npm + '/animate.css/animate.css',
		paths.npm + '/morris.js/morris.css',
		paths.npm + '/bootstrap-sweetalert/dist/sweetalert.css',
		paths.npm + '/jqvmap/dist/jqvmap.min.css',
		paths.npm + '/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
		paths.npm + '/owl.carousel/dist/assets/owl.carousel.min.css',
		paths.npm + '/owl.carousel/dist/assets/owl.theme.default.min.css',
		paths.npm + '/materialize-css/extras/noUiSlider/nouislider.css'

	])
		.pipe(concat('app.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(gulp.dest('src/assets/css/'));
	done();
};

//Copy, compile, minify all forms styles
function formStyle(done) {
	return gulp.src([
		paths.npm + '/jquery.spinner/dist/css/bootstrap-spinner.css',
		paths.npm + '/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
		paths.npm + '/nouislider/distribute/nouislider.min.css',
		paths.npm + '/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
		paths.npm + "/select2/dist/css/select2.min.css",
		paths.npm + "/flatpickr/dist/flatpickr.min.css",
	])
		.pipe(concat('form.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(gulp.dest('src/assets/css/'));
	done();
};


gulp.task("scripts", scripts);
gulp.task("chart", chart);
gulp.task("form", form);
gulp.task("style", style);
gulp.task("map", map);
gulp.task("table", table);
gulp.task("formStyle", formStyle);

gulp.task("default", gulp.series(scripts, chart, form, style, map, table, formStyle));