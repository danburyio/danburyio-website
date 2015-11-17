danbury.io
===========

This is the code for the
[danbury.io](http://www.danbury.io) website. It's just a
placeholder right now. If you'd like to help build the
site (and the Danbury hacker community) please get in touch.  You can
find fellow Danbury hackers via

[![Slack Status](http://slack.danbury.io/badge.svg)](http://slack.danbury.io)

## Quickstart (OS X)

For impatient people, this should work.

```
git clone https://github.com/danburyio/danburyio-website
cd danburyio-website

brew install node
brew install mongodb
brew install phantomjs

gem install bundler
bundle

foreman start -f Procfile.dev
```

## Requirements

The danbury.io website is
an [Express](http://expressjs.com/)
application
that is hosted on [Heroku](https://www.heroku.com/).
We use a variety of tools to build the app, including
[Sass](http://sass-lang.com/),
[Yeoman](http://yeoman.io/),
[Bower](http://bower.io/),
[Grunt](http://gruntjs.com/),
and Yeoman's [Angular Generator](https://github.com/yeoman/generator-angular).

To make changes to the website, you'll need a few
tools in your environment, mostly Yeoman, Bower, Grunt
and their dependencies, all of which are based on the
[node.js](http://nodejs.org/) stack.  The following
instructions will help you install those tools.  (These instructions are
a tad pedantic for the benefit of those who would like to contribute
but perhaps have less development experience.)

### Installing node and npm

If you're on a mac, it's likely easiest to install node via
[homebrew](http://brew.sh/).  If you're on another *nix machine,
you can likely figure this out for yourself.  If you're on windows,
you're on your own.

    brew install node

Then, you'll need to install [npm](https://npmjs.org/),
the node package manager.

    curl https://npmjs.org/install.sh | sh

### Checking out this repo

First, you'll need to check out this repository.

    git clone https://github.com/danburyio/danburyio-website
    cd danburyio-website

### Installing the dependencies

All the dependencies are under version control, so you
shouldn't need to `npm install` anything.

## Developing

### Working on the site

You can preview any changes you're making live by running

    foreman run grunt server

This will open up a browser window and automatically refresh
as you make changes to different files.  If you run the server
like that, you'll also need to be running Mongodb via the
`mongod` command.  Alternatively, you can run both MongoDB
and the server using the following command

	foreman start -f Procfile.dev

(See the contents of the `Procfile.dev` file.)

## Environment variables

If you encountered an exception starting the server, it's
likely that your environment is missing some required
variables.  You should keep these variables in a `.env` file,
so that `foreman` will source them automatically.  Your
`.env` should contain the following:

	GITHUB_CLIENT_ID=PUT-SOME-THING-HERE
	GITHUB_CLIENT_SECRET=PUT-SOME-THING-HERE
	GITHUB_CALLBACK_URL=http://localhost:9000/auth/callback
	MONGOLAB_URI=mongodb://localhost/newhaven-io
	COOKIE_SECRET=whatever-doesnt-matter-locally
  SERVER_SECRET=whatever-doesnt-matter-locally
	KNOWN_ADMINS=your-github-login

If you want to test the GitHub Oauth, you'll need to
[set up a GitHub application here](https://github.com/settings/applications)
and stick the credentials GitHub gives you in the `GITHUB_*` variables.
Obviously, you can change the value of the `MONGOLAB_URI`,
`COOKIE_SECRET` and `KNOWN_ADMINS` to be whatever you want.
(The latter parameter is a comma-delimited list of GitHub
users that should receive the "admin" role in the NewHaven.io
app.)


### Testing the site

There are a handful of tests, just for grins.  To run these,
you'll need [PhantomJS](http://phantomjs.org/), which you can
install by running

    brew install phantomjs

Then, you can run the tests like

    grunt test

### Deploying the site

[![Build Status](https://snap-ci.com/danburyio/danburyio-website/branch/master/build_image)](https://snap-ci.com/danburyio/danburyio-website/branch/master)

The site is hosted on Heroku and the `master` branch is automatically deployed
with [Snap-CI](https://snap-ci.com/danburyio/danburyio-website/branch/master).
Anyone with push access can deploy new changes by merging them into `master`.

## Contributors

The following people generously donated their time to building
the danbury.io website and its parent fork newhaven.io.  You should generously donate yours too!

* [Devin Weaver](https://github.com/sukima)
* [Chris Fidao](https://github.com/fideloper)
* [Adam Soffer](http://github.com/ads1018)
* [Joel Nimety](https://github.com/jnimety)
* [Dan Bernier](https://github.com/danbernier)
* [Zach Morek](https://github.com/ZachBeta)
* [Krishna R. Sampath](https://github.com/KrishnaRSampath)
* [Kyle Jensen](http://github.com/kljensen)

## Credit

This is a fork of the [newhaven.io](https://github.com/newhavenio/newhavenio-website) site. Many thanks to
their team for open-sourcing their hard work!

## License

Copyright (c) 2013 the Contributors (see above)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
