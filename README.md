Golazon
=======

Football data <a href="http://mnmlist.com/w/">mnmlist</a> way.
Open source prototype built as a proof of concept.

Contact: przemek@sobstel.org

## Main concepts

* extremely lightweight (~25KB in total!)
* remembers user choices to personalize order of search results and live matches
* leverage http caching as much as possible

## Getting started

* Install
  * `yarn install`

* Run
  * `npm run start` - watches the project with continuous rebuild
  * `npm run build` - builds minified project for production
  * `npm run` - list of all build tasks

## Decisions

* Stack: Riot.js, CoffeeScript, SCSS. See package.json for more.
* Build tools: brunch, npm.
* Architecture: static SPA site (hosted at GitHub) + external API.
* No images, except inline svg icon(s).

## Technical

### Issues

* Data: search API is very inefficient (would be good to rewrite to custom solution based on Riak Search.
* Routing: hashbang URLs (#!) used only because of GitHub Pages (cannot serve normal URLs without 404 http code)
* Sass: sass inside of tag processed independently from each other (sharing common stuff only via explicit `@import`)
* JS: riot variable registered globally (as generated tags use it like this; CommonJS option didn't work ok for me)

### Potential technical improvements

* Rewrite global util to riot mixins
* ES6 or TypeScript over CoffeeScript
* Riak Search for search engine
  * Why? AP (Availability + Partition Tolerance)
  * Additional features: shows competition by team name, eg. shows Premier League when searching for Everton
* Better compatibility with Opera Mini and other less popular browsers
* Extract SCSS to separate files to leverage SCSS power in full.
* CloudFlare (free -> TTL 2h) -> for search?
* Mobile app with Cordova.
* Accessibility.
* Recently finished games (determined at server side).
* Migrate to riot3 (http://riotjs.com/guide/migration-from-riot2/, http://riotjs.com/release-notes/) and es6
* Convention: use camelCase eventually
* Automated tests (!) (with nightmarejs?)
