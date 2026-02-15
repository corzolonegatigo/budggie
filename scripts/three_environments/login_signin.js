import * as THREE from 'three';



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEECF6D)
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

const three_env = document.getElementById('3js-env')
three_env.appendChild( renderer.domElement );

function animate() {


  renderer.render( scene, camera );

}