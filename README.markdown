# ember-gulp-example

ember-gulp-example is a scaffold to start developing Ember.js applications without extensive setup upfront, but with everything you need to enjoy a tidy directory structure.

It features:

 - Ember.js
 - Gulp.js
 - Handlebars precompilation
 - Dependencies via bower
 - Easy local server via PHP
 - Support for `hashchange` and `history` routing out of the box.

## Dependencies

 - [Node.js](http://nodejs.org)
 - [Bower](http://bower.io)
 - PHP (only if you want to use `gulp server`, alternatively you can use WEBrick, SimpleHTTPServer or whatever suits your needs - just adapt `gulpfile.js`)

## Installation

```
git clone https://github.com/felixkiss/ember-gulp-example.git
cd ember-gulp-example/
rm -rf .git/
bower install
npm install
```

## Usage

```
gulp
```

will

 - compile jQuery, Handlebars and Ember (Bower dependencies) into `public/assets/javascripts/dependencies.js`
 - compile all `.js` in `app/` into `public/assets/javascripts/app.js`
 - compile all `.handlebars` in `app/templates` into `public/assets/javascripts/templates.js`
 - watch the `app/` for changes and recompile automatically

```
gulp server
```

will additionally start the webserver built into PHP with `public/` as the document root.

## License

MIT
