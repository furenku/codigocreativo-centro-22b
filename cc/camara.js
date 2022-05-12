let camerasData


let cameras = []


let center



function camerasStart() {

    camerasData = [
        { position: createVector( 200, -150, 200 ) },
        { position: createVector( -180, -150, -180 ) },
        { position: createVector( 180, -150, -180 ) },
        { position: createVector( -180, -150, 200 ) },
        { position: createVector( 1, -250, 0 ) },
    ]
    
    
    
    center = createVector( 0, -50, 0 )
    
    

    camerasData.forEach((data)=>{
        
        let newCamera

        newCamera = createCamera()

        newCamera.setPosition(
            data.position.x,
            data.position.y,
            data.position.z,
        )

        newCamera.lookAt(
            center.x,
            center.y,
            center.z,
        )

        cameras.push( newCamera )

    })





    setCamera( cameras[0] )
    
}

function cameraMove() {

    
}




function keyPressed() {

    if( parseInt(key) > 0 ) {

        setCamera( cameras[ parseInt(key) - 1 ] )            

    }

}



