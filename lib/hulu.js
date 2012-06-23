var request = require( "request" )
  , parser  = require( "xml2json" )


exports.search = function( title, callback ) {

  // TODO: add ignored_media

  var URLToRequest = "http://m.hulu.com/search?dp_identifier=hulu&query=" +encodeURIComponent(title) + "&items_per_page=20&page=1"

  request( URLToRequest, function ( error, response, body ) {

      var json = parser.toJson( body );
      callback( JSON.parse(json) )


    }
  )
}
