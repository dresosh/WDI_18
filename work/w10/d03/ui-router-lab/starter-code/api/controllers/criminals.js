var Criminal = require("../models/Criminal")

module.exports = {
  // GET
  getAll: function ( request, response ) {
    Criminal.find( function( error, criminals ) {
      if ( error ) {
        response.json( { message: "Could not find any criminal" } )
      } else {
        response.json( { criminals: criminals } )
      }
    }).select( "-__v" )
  },
  // POST
  createCriminal: function ( request, response ) {
    var criminal = new Criminal( request.body )
    criminal.save( function ( error ) {
      if ( error ) {
        response.json( { messsage: "Could not ceate criminal b/c:" + error } )
      } else {
        response.json( { criminal: criminal } )
      }
    })
  },
  // GET
  getCriminal: function ( request, response ) {
    var id = request.params.id

    Criminal.findById( { _id: id }, function ( error, criminal ) {
      if ( error ) {
        response.json( { message: "Could not find criminal b/c:" + error } )
      } else {
        response.json( { criminal: criminal } )
      }
    }).select("-__v")
  },
  // UPDATE
  updateCriminal: function ( request, response ) {
    var id = request.params.id

    Criminal.findById( { _id: id }, function ( error, criminal ) {
      if ( error ) {
        response.json( { message: "Could not find criminal b/c:" + error } )
      }

      if ( request.body.name ) {
        criminal.name = request.body.name
      }
      if ( request.body.location ) {
        criminal.start = request.body.location
      }
      if ( request.body.status ) {
        criminal.end = request.body.status
      }

      criminal.save( function( error ) {
        if ( error ) {
          response.json( { messsage: "Could not update criminal b/c:" + error } )
        } else {
          response.json( { message: "Criminal successfully updated", criminal: criminal } )
        }
      })
    }).select( "-__v" )
  },
  // DELETE
  removeCriminal: function ( request, response ) {
    var id = request.params.id

    Criminal.remove( { _id: id }, function ( error ) {
      if ( error ) {
        response.json( { message: "Could not delete criminal b/c:" + error } )
      } else {
        response.json( { message: "Criminal successfully deleted" } )
      }
    }).select( "-__v" )
  }
}
