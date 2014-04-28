#!/bin/bash

./node_modules/ember-precompile/bin/ember-precompile \
    -b app/templates/ \
    -f public/assets/javascripts/templates.js \
    app/templates/*.handlebars \
    app/templates/**/*.handlebars
