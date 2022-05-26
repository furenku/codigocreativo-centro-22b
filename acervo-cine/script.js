function preload() {
    
    preloadImages()
    
}


function setup() {
    
    createCanvas(windowWidth, windowHeight)
    colorMode( HSB, 1, 1, 1, 1 )
    
    experienceSetup()

}

function draw() {
    
    experienceDraw()
    
    menuDraw()

}




function keyPressed() {

    if( parseInt(key) > 0 ) {
        // with number keys, choose image
        categoryChoose( parseInt(key) )
    } else {
        // with other keys, choose next image
        imageNext()
    }

}

