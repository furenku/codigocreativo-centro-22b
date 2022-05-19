let exampleImages = [];

function preloadImages() {

    console.log( "db.example", db.example );

    db.example.forEach( path => {

        exampleImages.push( loadImage( path ) )

    })


}

function experienceDraw() {
    
    background( 0 )
    
    fill( 0, 0, 0.5 )

    rect( 0, 0, width, height )

    image(exampleImages[0], 100, 100, 100, 100 );
    image(exampleImages[1], 200, 200, 100, 100 );
    image(exampleImages[2], 300, 300, 100, 100 );

    
}