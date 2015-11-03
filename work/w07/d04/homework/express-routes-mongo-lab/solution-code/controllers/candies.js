var Candy = require('../models/Candy');

// GET
function getAll( request, response ) { 
  Candy.find(function( error, candies ) {
    if( error ) {
      response.json( { message: "Could not find any candy" } );
    }
    response.json( { candies: candies } );
  });
}

// POST
function createCandy( request, response ) {
  console.log( "in POST" );
  console.log( "body:", request.body );
  var candy = new Candy();

  candy.name = request.body.name;
  candy.color = request.body.color;

  candy.save( function( error ) {
    if ( error ) {
      response.json( { messsage: "Could not ceate candy b/c:" + error } );
    }
    response.redirect( "/candies" );
  });  
}

// GET
function getCandy( request, response ) {
  Candy.findById( { _id: request.params.id }, function( error, candy ) {
    if( error ){
      response.json( { message: "Could not find candy b/c:" + error } );
    } else {
      response.json( { candy: candy } );
    }
  });
}

function updateCandy( request, response ) {
  Candy.findById( { _id: request.params.id }, function( error, candy ) {
    if( error ) response.json( { message: "Could not find candy b/c:" + error } );

    if ( request.body.name ) {
      candy.name = request.body.name;
    }
    if ( request.body.color ) {
      candy.color = request.body.color;
    }

    candy.save( function( error ) {
      response.json( { messsage: error ? "Could not update candy b/c:" + error : "Candy successfully updated" } );
    });  
  });
}

function removeCandy( request, response ) {
  Candy.remove( { _id: request.params.id }, function( error ) {
    response.json( { message: error ? "Could not delete candy b/c:" + error : "Candy successfully deleted" } );
  });
}

module.exports = {
  getAll: getAll,
  createCandy: createCandy,
  getCandy: getCandy,
  updateCandy: updateCandy,
  removeCandy: removeCandy
}
