# Ghost as Middleware

## Installation
```
$ npm install ghost-as-middleware
```

## Usage
```js
var app = require( 'express' )()
var ghost = require( 'ghost-as-middleware' )
app.get( '/', function( req, res ){
    res.send( 'this is my app!' )
})

app.use( '/blog', ghost() )
app.listen( 8888 )
```

## Note
You'll need to adjust the settings for the css and js paths to be correct
