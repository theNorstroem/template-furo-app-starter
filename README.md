# my-app
Starter example app

## Setup
Before you start the server you have to generate the API specs
To do this, run `npm run build:spec` to generate the needed environment files

The specs in this demo are pointing to **/api**, so you do not need an api server to see the client.  

## Starting the server

### Running the tests
Open `http://127.0.0.1:8000/test/` to run your tests direct in the browser. 

To run the automated test use `npm run test`. This will take some time...

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
