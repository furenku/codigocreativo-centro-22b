let currentCategory
let currentImage


function preloadImages() {

    // load all images in all categories and store it in new object property:
    Object.values(db).forEach( categoryLoad )


}

function categoryLoad( category ) {
    category.forEach( img => img.image = loadImage( img.path ) )
}



function experienceSetup() {

    currentCategory = db.category1
    currentImage = 0

}



function experienceDraw() {
    
    background( 0 )
    
    fill( 0, 0, 0.5 )

    rect( 0, 0, width, height )


    imageDraw( currentCategory[currentImage] )


    
}




function imageDraw( img ) {

    let vertical = img.image.height > img.image.width


    let imgW
    let imgH

    let aspectRatio = img.image.width / img.image.height

    if( vertical ) {
        
        let w = min( height, img.image.width / aspectRatio )
        let h = w / aspectRatio

        imgW = w
        imgH = h
    } else {

        let h = min( height, img.image.width * aspectRatio )
        let w = h * aspectRatio

        imgW = w
        imgH = h

    }



    let imgX = ( width - imgW ) / 2
    let imgY = ( height - imgH ) / 2

    let textX = width - 200
    let textY = height / 2

    image( img.image, imgX, imgY, imgW, imgH )

    fill( '#' + img.color )


    text( img.title, textX, textY+20 )
    text( img.author, textX, textY+50 )
    text( img.text, textX, textY+80 )

}



function categoryChoose( number ) {

    let keys = Object.keys(db)
    let nextKey = keys[ (number-1) % keys.length ]

    currentCategory = db[ nextKey ]
    currentImage = 0

}




function imageNext() {

    currentImage++
    currentImage %= currentCategory.length

}



