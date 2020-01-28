import React, { useState } from 'react';
import * as THREE from 'three'; 

// styling imports 
import "./BoxModel.scss"; 

const BoxModel = (props) => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // alpha: true allows us to use the "setClearColor" function to have a transparent background
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( props.width, props.height );

    renderer.setClearColor(0xffffff, 0); 
    // this wasn't working because this code was running before the component rendered, hence nothing to select from the DOM
    // find a nicer solution for this
    setTimeout(() => {
        const cubeComponent = document.querySelector('.testing'); 
        console.log(cubeComponent)
        cubeComponent.appendChild( renderer.domElement );
    }, 1000)



    var geometry = new THREE.BoxGeometry( props.boxWidth, props.boxHeight, props.boxLength );
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xcccccc, side: THREE.BackSide } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 50;

    const animate = () => {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
    
        renderer.render( scene, camera );
    }
    animate(); 

    console.log(props); 
    return ( 
        <div className="sc-wrapper">
            <p className="testing">
            </p>
        </div> );
}
 
export default BoxModel;
