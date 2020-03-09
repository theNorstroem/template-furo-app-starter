# Starter template example app
Use this template to quickly get a running app. 

## Setup
### Step 1
run `npm install` to install the dependencies

### Step 2 [optional]

Before you start the server you have to generate the API specs.
To do this, run `npm run spec:build` to generate the needed environment files

The specs in this demo are pointing to static json files in  **/api**, so you do not need an api server to see the client working.  


## Starting the server
To start a static server just type `npm run start`.

## Starting development
The files for your project are located in `/src`.  The starter pack contains some example views (pages).

## Configuration
In `/src/configs` you will find some config files for a usual app.

### - `flowConfig.json` : 
This ist the configuration for the adaptive "routing".

### - `init.js` : 
initialize application env, theme, api

### - `styling.js` : 
In this file you can style the app (setting colors and spacing ,...).

### - `iconset.js` : 
In this file you can add your custom icons to the default icon set

### Running the tests

The tests are located in `/test`. Like every other folder, you are free to move them, as long you update the dependencies and configs.
To run the automated test use `npm run test`. This will take some time... (when you have added your testsuites ;-))

Add your browsers in the `karma.config.js`
 

[Read more about testing](https://open-wc.org/testing/testing-karma.html#getting-started)

## Build
Build tools take your code and make it production-ready. Among the things you may need build tools to do:

- Transform ES6 code to ES5 for legacy browsers, including transforming JavaScript modules into other formats.
- Bundle modules together can improve performance by reducing the number of files that need to be transferred.
- Minify JavaScript, HTML, and CSS.

Many build tools can do this for you. 

[open-wc rollup build](https://open-wc.org/building/) is already [configured](https://open-wc.org/building/building-rollup.html) in this project

[Read more about building your app on the lit-html page...](https://lit-html.polymer-project.org/guide/tools#build)


### Pre configured npm commands
We have configured a lot of commands in the package.json (linter,  formater, test, build, furo spec builder, furo user interface generators,...)
 
- start
- start:build
- build:compatibility
- build:modern
- lint
- lint:eslint
- lint:prettier
- format
- format:eslint
- format:prettier
- test
- test:watch
- test:update-snapshots
- test:prune-snapshots
- test:compatibility
- test:compatibility:watch
- test:bs
- uib:init
- uib:generate
- uib:watch
- spec:build

### Additional configs

- rollup.config.js
- rollup.config.modern.js
- workbox-config.js
- karma.bs.config.js
- karma.conf.js
- furo.spec.conf.json
- furo.ui.spec.conf.json
- es-dev-server.config.js
- es-dev-server-build.config.js

### Keep your repo in sync with the starter template
The starter get some updates from time to time. To stay in sync with this changes, you can add the template 
repository as a remote.

```shell script
git remote add template git@github.com:theNorstroem/template-furo-app-starter.git
git fetch --all

# initial merge
git merge template/master --allow-unrelated-histories
# resolve the conflicts and merge the changes

```
