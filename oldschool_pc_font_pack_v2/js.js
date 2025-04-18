// Import the THREE.js library

var slideContainer = document.querySelector('.slides');
slideContainer.addEventListener("scroll", setScrollVar);

var videoContainer = document.getElementById("background-video");
var numBackgroundVideos = 10;

function setScrollVar() {
  const percentOfScreenHeightScrolled = slideContainer.scrollTop / (4 * slideContainer.clientHeight);

  var backgroundVideoID = 1;
  backgroundVideoID = 1 + Math.floor(percentOfScreenHeightScrolled / (1 / numBackgroundVideos));
  videoContainer.src = 'videos/background-' + backgroundVideoID + '.mp4';
}

setScrollVar();


import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene1 = new THREE.Scene();

// Create a new camera with positions and angles
const camera1 = new THREE.PerspectiveCamera(8, window.innerWidth / window.innerHeight, 1, 500);

const scene2 = new THREE.Scene();
// Create a new camera with positions and angles
const camera2 = new THREE.PerspectiveCamera(6, window.innerWidth / window.innerHeight, 1, 500);
// Keep track of the mouse position, so we can make the eye move
const scene3 = new THREE.Scene();

// Create a new camera with positions and angles
const camera3 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

const scene4 = new THREE.Scene();

// Create a new camera with positions and angles
const camera4 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

const scene5 = new THREE.Scene();

// Create a new camera with positions and angles
const camera5 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

// Create variables for the loaded objects
let lsdObject;
let mkultraObject;
let bikeObject;
let ravenObject;
let musicObject;

// Create separate loaders for the objects
const lsdLoader = new GLTFLoader();
const mkultraLoader = new GLTFLoader();
const bikeLoader = new GLTFLoader();
const ravenLoader = new GLTFLoader();
const musicLoader = new GLTFLoader();
// Load "lsdtitle.glb"
lsdLoader.load(
  `animations/lsdtitle.glb`,
  function (gltf) {
    lsdObject = gltf.scene;
    lsdObject.position.set(0, -20, 50); // Adjust the Y value to position it higher on the page
    scene1.add(lsdObject);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

// Load "mkultra.glb"
mkultraLoader.load(
  `animations/mkultra.glb`,
  function (gltf) {
    mkultraObject = gltf.scene;
    mkultraObject.position.set(-25, -50, 200); // Position as needed
    mkultraObject.scale.set(4,4,4);
    scene2.add(mkultraObject);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

bikeLoader.load(
  `animations/bikeride3d.glb`,
  function (gltf) {
    bikeObject = gltf.scene;
    bikeObject.position.set(-30, 0, 0); // Adjust the Y value to position it higher on the page
    bikeObject.scale.set(4,4,4);
    scene3.add(bikeObject);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

ravenLoader.load(
  `animations/ravenscrag.glb`,
  function (gltf) {
    ravenObject = gltf.scene;
    ravenObject.position.set(-30, 0, 100); // Adjust the Y value to position it higher on the page
    ravenObject.scale.set(60, 60, 60);
    ravenObject.rotation.x = 1.07;
    scene4.add(ravenObject);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

musicLoader.load(
  `animations/music on acid.glb`,
  function (gltf) {
    musicObject = gltf.scene;
    musicObject.position.set(-25, 0, 100); // Adjust the Y value to position
    musicObject.scale.set(4,4,4);
    scene5.add(musicObject);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);
// Instantiate a new renderer and set its size
const renderer1 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer1.setSize(window.innerWidth, window.innerHeight);

const renderer2 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer2.setSize(window.innerWidth, window.innerHeight);

const renderer3 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer3.setSize(window.innerWidth, window.innerHeight);

const renderer4 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer4.setSize(window.innerWidth, window.innerHeight);

const renderer5 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer5.setSize(window.innerWidth, window.innerHeight);
// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer1.domElement);

document.getElementById("container3D2").appendChild(renderer2.domElement);
document.getElementById("container3D3").appendChild(renderer3.domElement);
document.getElementById("container3D4").appendChild(renderer4.domElement);
document.getElementById("container3D5").appendChild(renderer5.domElement);

// Set how far the camera will be from the 3D model
camera1.position.set(0, 2, 500);
camera2.position.set(0, -50, 500);
camera3.position.set(170, 2, 500);
camera4.position.set(155, -5, 500);
camera5.position.set(125 , -5, 500);
// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 500);
topLight.position.set(300, 300, 300); // top-left-ish
topLight.castShadow = true;


const ambientLight = new THREE.AmbientLight(0xffffff, 500);
ambientLight.position.set(0, -15, 45)
scene1.add(topLight);
scene1.add(ambientLight);
scene2.add(topLight);
scene2.add(ambientLight);
scene3.add(topLight);
scene3.add(ambientLight);
scene4.add(topLight);
scene4.add(ambientLight);
scene5.add(topLight);
scene5.add(ambientLight);
// Render the scene
function animate() {
  requestAnimationFrame(animate);
  // Add any necessary code to update the scene here

  // Rotate the loaded objects
  
    lsdObject.rotation.x += Math.abs(Math.random()) % 0.02;
    lsdObject.rotation.y += Math.abs(Math.random()) % 0.02;
    lsdObject.rotation.z += Math.abs(Math.random()) % 0.02;
    
    mkultraObject.rotation.x += Math.abs(Math.random()) % 0.02;
    musicObject.rotation.x += Math.abs(Math.random()) % 0.02;
    let y = bikeObject.position.y 
    if(y < 5)
      bikeObject.position.set(-20,  Math.abs(Math.random()) * 2 , 0);
    else
    bikeObject.position.set(-20,  0, 0);
  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
  renderer4.render(scene4, camera4);
  renderer5.render(scene5, camera5);
  renderer6.render(scene6, camera6);
  renderer7.render(scene7, camera7);
  renderer8.render(scene8, camera8);
}





// Start the 3D rendering


// Create additional scenes and cameras
const scene6 = new THREE.Scene();
const camera6 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

const scene7 = new THREE.Scene();
const camera7 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

const scene8 = new THREE.Scene();
const camera8 = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);

// Create additional variables for loaded objects
let object6;
let object7;
let object8;

// Create separate loaders for the new objects
const loader6 = new GLTFLoader();
const loader7 = new GLTFLoader();
const loader8 = new GLTFLoader();

// Load the new models (adjust the file paths as needed)
loader6.load(
  `animations/behindbars.glb`,
  function (gltf) {
    object6 = gltf.scene;
    object6.position.set( -35, 0, 400); // Adjust the position as needed
    object6.scale.set( 3,3,3);
    object6.rotation.x = 1.07;
    scene6.add(object6);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

loader7.load(
  `animations/birthoflsd.glb`,
  function (gltf) {
    object7 = gltf.scene;
    object7.position.set(0, 0, 100); // Adjust the position as needed
    object7.scale.set( 10,10,10);
    object7.rotation.x = 1.07;
    scene7.add(object7);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

loader8.load(
  `animations/Humantrials.glb`,
  function (gltf) {
    object8 = gltf.scene;
    object8.position.set(-25, 5, 400); // Adjust the position as needed
    object8.scale.set( 3,3,3);
    object8.rotation.x = 1.07;
    scene8.add(object8);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

// Create additional renderers
const renderer6 = new THREE.WebGLRenderer({ alpha: true });
renderer6.setSize(window.innerWidth, window.innerHeight);

const renderer7 = new THREE.WebGLRenderer({ alpha: true });
renderer7.setSize(window.innerWidth, window.innerHeight);

const renderer8 = new THREE.WebGLRenderer({ alpha: true });
renderer8.setSize(window.innerWidth, window.innerHeight);

// Add the additional renderers to the DOM
document.getElementById("container3D6").appendChild(renderer6.domElement);
document.getElementById("container3D7").appendChild(renderer7.domElement);
document.getElementById("container3D8").appendChild(renderer8.domElement);

// Set the positions of the additional cameras
camera6.position.set( 0 , 0, 500); // Adjust the position as needed
camera7.position.set(125 , -5, 500); // Adjust the position as needed
camera8.position.set(15 , -5, 500); // Adjust the position as needed



// Add lights to the scenes 6, 7, and 8
scene6.add(topLight);
scene6.add(ambientLight);
scene7.add(topLight);
scene7.add(ambientLight);
scene8.add(topLight);
scene8.add(ambientLight);


animate();



function playAudio() {
  var audio = document.getElementById('audio1');
  audio.play();
}
