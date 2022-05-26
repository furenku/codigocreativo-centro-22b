let currentCategory


function preloadImages() {

    // load all images in all categories and store it in new object property:
    Object.values(db).forEach( categoryLoad )


}

function categoryLoad( category ) {
    category.forEach( img => img.image = loadImage( img.path ) )
}



function experienceSetup() {

    currentCategory = db.category1

}



function experienceDraw() {
    
    background( 0 )
    
    fill( 0, 0, 0.5 )

    rect( 0, 0, width, height )


    currentCategory.forEach( imageDraw )


    
}




function imageDraw( img, i ) {

    image( img.image, i*100, i*100, 100, 100 )

    fill( '#' + img.color )

    text( img.title, i*100, i*100+120 )
    text( img.author, i*100, i*100+150 )
    text( img.text, i*100, i*100+180 )

}



function categoryChoose( number ) {

    let keys = Object.keys(db)
    let nextKey = keys[ (number-1) % keys.length ]

    currentCategory = db[ nextKey ]

}




