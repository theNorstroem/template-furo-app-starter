# my-app
Starter example app

## Setup
### Step 1
run `npm install` to install the dependencies

### Step 2
Before you start the server you have to generate the API specs.
To do this, run `npm run build:spec` to generate the needed environment files

The specs in this demo are pointing to static json files in  **/api**, so you do not need an api server to see the client working.  


## Starting the server
To start a static server just type `npm run serve` or `polymer serve`.

## Starting development
The files for your project are located in `/src`.  The starter pack contains some example views (pages).

## Configuration
In `/configs` you will find some config files for a usual app.

### - `flowConfig.json` : 
This ist the configuration for the adaptive "routing".

### - `init.js` : 
initialize application env, theme, api

### - `styling.js` : 
In this file you can style the app (setting colors and spacing ,...).

### - `iconset.js` : 
In this file you can add your custom icons to the default icon set



### Running the tests
Open `http://127.0.0.1:8000/test/` to run your tests direct in the browser. 

The tests are located in `/test`. Like every other folder, you are free to move them, as long you update the dependencies and configs.
To run the automated test use `npm run test`. This will take some time... (when you have added your testsuites ;-))

```bash
npm run test

Installing and starting Selenium server for local browsers
Selenium server running on port 50615
chrome 75                Beginning tests via http://localhost:8001/components/mypack/generated-index.html?cli_browser_id=0
chrome failed to maximize
safari 12.1.1            Beginning tests via http://localhost:8001/components/mypack/generated-index.html?cli_browser_id=1
firefox 67               Beginning tests via http://localhost:8001/components/mypack/generated-index.html?cli_browser_id=2
safari 12.1.1            Tests passed
firefox 67               Tests passed
chrome 75                Tests passed

Test run ended with great success

chrome 75 (9/0/0)                     

=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 6/6 )
================================================================================

```

> If you are on a windows systems, do not forget to remove safari and add **edge** in the *wct.conf.json*.

## Build
Build tools take your code and make it production-ready. Among the things you may need build tools to do:

- Transform ES6 code to ES5 for legacy browsers, including transforming JavaScript modules into other formats.
- Bundle modules together can improve performance by reducing the number of files that need to be transferred.
- Minify JavaScript, HTML, and CSS.

Many build tools can do this for you. Currently we recommend the Polymer CLI or webpack.

[Read more about building your app on the lit-html page...](https://lit-html.polymer-project.org/guide/tools#build)
