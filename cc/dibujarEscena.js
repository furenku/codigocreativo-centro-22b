function drawLights() {
    
    pointLight( 255, 150+(frameCount*2) % 55, 255, 0, -250, 100 )

}

function dibujarPiso() {
    
    push()

        rotateX( HALF_PI )
    // rotateZ( frameCount / 20 )
    
        plane( 2000, 2000)


    pop()

}

function dibujarEscena() {

    drawLights()

    dibujarPiso()


    push()
    
        translate( 0, -50, 0 )

        rotateY( frameCount / 10 )
        rotateZ( frameCount / 20 )
        // rotate( frameCount / 10, 0, frameCount / 20 )
        // rotate( frameCount / 10, frameCount / 20, frameCount / 30 )

        box( 30 )

    pop()

    push()
        translate( 200, -25, 0 )

        box( 50 )
    pop()

    push()
        translate( 0, -25, -100 )
0
        box( 50 )
        
    pop()



 
    
}