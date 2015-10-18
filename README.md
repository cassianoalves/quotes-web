# quotes-web

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Heroku Deploy

Using: https://github.com/nknj/heroku-buildpack-yo-angular

## Configure Heroku:

heroku config:set BUILDPACK_URL=https://github.com/nknj/heroku-buildpack-yo-angular.git

heroku config:set API_BASE_URL=<url base>
