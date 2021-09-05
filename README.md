# Node js, Mongodb, Express js Shopping Cart 

## Requirements
- mongodb
- node.js

## Used middlewares
- connect-mongo
- express cookie
- nodemon
- morgan

## Migrations
Current app implementation doesn't have UI for adding new products, <br/>
but you can run script with migrations for add some data into DB and get it from UI.

````npm
npm run migration:write
````

## ENV
 Before running the app, you should create your own `.env` file in the root with the following variables:
```dotenv
PORT=<place your port here>
MONGO_DB_URL=<path to mongoDB>
```

 ### Running
  * npm install
  * npm start
  * open browser at `http://localhost:3000` OR `http://localhost:<PORT_AS_CONFIGURED_BY_YOU>`
  * Do the operations of 'Add to Cart' etc inside the browser

