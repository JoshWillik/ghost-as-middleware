var ghost = require( 'ghost' )

function processBuffer( buffer, app ){
  while( buffer.length ){
    var request = buffer.pop()
    app( request[0], request[1] )
  }
}

function makeGhostMiddleware( options ){
  var requestBuffer = []
  var app = false

  ghost( options ).then( function( ghost ){
    app = ghost.rootApp
    processBuffer( requestBuffer, app )
  })

  return function handleRequest( req, res ){
    if( !app ){
      requestBuffer.unshift( [req, res] )
    } else {
      app( req, res )
    }
  }
}

module.exports = makeGhostMiddleware
