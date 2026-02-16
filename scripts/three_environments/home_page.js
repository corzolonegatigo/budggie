import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


window.addEventListener('DOMContentLoaded', () => { 
  const three_env = document.getElementById('3js-env');
  const userdata = JSON.parse(window.localStorage.getItem('Userdata'));
  const currentitem = userdata.currentitem;
  
  

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xEECF6D);

  const camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(0, 2, 10);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 12, 10);
  scene.add(light);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth / window.innerHeight,);
  three_env.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();

  const pivot = new THREE.Group();

  if (currentitem !== '') {
    const colorMapHammer = textureLoader.load('./models/hammer_txt/BaseColour.png');
    const aoMapHammer = textureLoader.load('./models/hammer_txt/AO.png');
    const metallicMapHammer = textureLoader.load('./models/hammer_txt/Metallic.png');
    const roughnessMapHammer = textureLoader.load('./models/hammer_txt/Roughness.png');
    const normalMapHammer = textureLoader.load('./models/hammer_txt/Normals.png');

    const hammer_material = new THREE.MeshStandardMaterial({
      map: colorMapHammer,
      aoMap: aoMapHammer,
      metalnessMap: metallicMapHammer,
      roughnessMap: roughnessMapHammer,
      normalMap: normalMapHammer,
    });
    


    const colorMapPs5 = textureLoader.load('./models/ps5_txt/BaseColour.png');
    const aoMapPs5 = textureLoader.load('./models/ps5_txt/AO.png');
    const metallicMapPs5 = textureLoader.load('./models/ps5_txt/Metallic.png');
    const roughnessMapPs5 = textureLoader.load('./models/ps5_txt/Roughness.png');
    const normalMapPs5 = textureLoader.load('./models/ps5_txt/Normals.png');

    const ps5_material = new THREE.MeshStandardMaterial({
      map: colorMapPs5,
      aoMap: aoMapPs5,
      metalnessMap: metallicMapPs5,
      roughnessMap: roughnessMapPs5,
      normalMap: normalMapPs5,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 1.0,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5,
      thickness: 0.5,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide,
    });

    const fbxload = new FBXLoader();

    let ps5;
    let box;
    let hammer;

    

    fbxload.load('./models/box2.fbx', (object) => {
      box = object;
      box.scale.set(0.06, 0.06, 0.06);

      box.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry?.attributes?.uv) {
            child.geometry.attributes.uv2 = child.geometry.attributes.uv;
          }
          child.material = glassMaterial;
        }
      });

      box.position.set(0, -0.5, 0);
      pivot.add(box);
    });


    fbxload.load('./models/ps5.fbx', (object) => {
      ps5 = object;
      ps5.scale.set(1.2, 1.2, 1.2);

      ps5.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry?.attributes?.uv) {
            child.geometry.attributes.uv2 = child.geometry.attributes.uv;
          }
          child.material = ps5_material;
        }
      });

      ps5.position.set(0, 0, 0);
      
      box.add(ps5); 
    });

    fbxload.load('./models/hammer_centered.fbx', (object) => {
      hammer = object;
      hammer.scale.set(0.05, 0.05, 0.05);
      hammer.traverse((child) => {
        if (child.isMesh) child.material = hammer_material;
      });
      hammer.visible = false; 
      hammer.rotation.x = -0.2;
      hammer.position.set(0,-2,2)
      pivot.add(hammer);
    }); 

      let showHammer = false;
    setInterval(() => {

      // show presence
      if (hammer && box) {
        showHammer = !showHammer;
        hammer.visible = showHammer;
        box.visible = !showHammer;
      }
    }, 3000);
  }


  pivot.scale.set(1, 1, 1);


  scene.add(pivot);


  function updatePivotPosition() {
    const distance = 10;        // how far in front of the camera
    const leftOffset = 8;       // positive = left, negative = right
    const downOffset = 4;       // positive = down, negative = up
    const forwardOffset = 0;    // optional: push closer/further

    // Camera direction
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);

    // Camera right vector
    const right = new THREE.Vector3();
    right.crossVectors(forward, camera.up).normalize(); // points to camera's right

    // Camera up vector
    const up = camera.up.clone().normalize();

    // Base position in front of camera
    const basePos = camera.position.clone().add(forward.multiplyScalar(distance));


    if (window.innerWidth <= 768) {
      pivot.position.copy(
        basePos
        .add(up.multiplyScalar(-downOffset/2))
        );
    } else {
      // Move pivot left/down relative to camera
      pivot.position.copy(
        basePos
            .add(right.multiplyScalar(-leftOffset)) // negative right = left
            .add(up.multiplyScalar(-downOffset))    // negative up = down
            .add(forward.clone().multiplyScalar(forwardOffset))
    );

    }
    


  }

  

  function animate() {
    pivot.rotation.y += 0.005; // rotate
    updatePivotPosition();     // keep bottom-left quadrant

    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);


  function onWindowResize() {
    const width = window.innerWidth
    const height =  window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    updatePivotPosition();
  }

  window.addEventListener('resize', onWindowResize);
  onWindowResize(); 
})