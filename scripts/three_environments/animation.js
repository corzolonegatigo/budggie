import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';




const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEECF6D)
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 2, 12)

// Key light
const keyLight = new THREE.DirectionalLight(0xffffff, 2);
keyLight.position.set(5, 10, 5);
scene.add(keyLight);

// Fill light
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-5, 5, -5);
scene.add(fillLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const three_env = document.getElementById('3js-env')
three_env.appendChild( renderer.domElement );



const loader = new GLTFLoader();

loader.load('./models/animated.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  console.log(gltf.animations); // See available animations

  const mixer = new THREE.AnimationMixer(model);

  if (gltf.animations.length > 0) {
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
  }

    model.userData.mixer = mixer;
    model.position.set(0,-4,0)
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxAxis = Math.max(size.x, size.y, size.z);

    model.scale.multiplyScalar(2 / maxAxis);

});

const clock = new THREE.Clock();

function animate() {
    
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  scene.traverse(obj => {
    if (obj.userData.mixer) {
      obj.userData.mixer.update(delta);
    }
  });

  renderer.render(scene, camera);
}
animate();
