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
        categoryChoose( parseInt(key) )
    }

}

