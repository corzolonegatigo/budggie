import * as THREE from 'three';
import { GLTFLoader, FBXLoader } from 'three/examples/jsm/Addons.js';




const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEECF6D)
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(8, 2, 12)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5, 12, 5)
scene.add(light)

scene.add(new THREE.AmbientLight(0xffffff, 0.8))

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const three_env = document.getElementById('3js-env')
three_env.appendChild( renderer.domElement );


// get reference size

const textureLoader = new THREE.TextureLoader();


const colorMap = textureLoader.load('./models/BaseColour.png');      // BaseColor / Albedo
const aoMap = textureLoader.load('./models/AO.png');            // Ambient Occlusion
const metallicMap = textureLoader.load('./models/Metallic.png');// Metallic
const roughnessMap = textureLoader.load('./models/Roughness.png');// Roughness
const normalMap = textureLoader.load('./models/Normals.png'); 


const material = new THREE.MeshStandardMaterial({
  map: colorMap,
  aoMap: aoMap,
  metalnessMap: metallicMap,
  roughnessMap: roughnessMap,
  normalMap: normalMap
});

const fbxload = new FBXLoader();


let hammer;

const pivot = new THREE.Group();

fbxload.load('./models/HammerText.fbx', (object) => {

  hammer = object
  hammer.scale.set(0.05, 0.05, 0.05); // FBX files are often huge
  scene.add(hammer);

   hammer.traverse((child) => {
    if (child.isMesh) {

        if (child.geometry?.attributes?.uv) {
          child.geometry.attributes.uv2 = child.geometry.attributes.uv;
        }

        child.material = material;
      }
  });

  hammer.position.set(4, 0, 0)
  pivot.add(hammer);
  pivot.position.set(2,-6,-2)
  hammer.rotation.z = 1.5;

  
});

scene.add(pivot);

function animate() {
  /*
    cube.rotation.x += 0.025;
    cube.rotation.y = 0.06;
  */
    if (hammer) {
        pivot.rotation.z += 0.01; // rotate around Y axis
      }

      renderer.render( scene, camera );

  }
 

 renderer.setAnimationLoop( animate );






/*
const geometry = new THREE.BoxGeometry( 2, 2, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x90ffee } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

cube.x = -100


const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (fbxModel) {
    fbxModel.rotation.y += delta * 1; // consistent speed
  }

  renderer.render(scene, camera);
}
*/


