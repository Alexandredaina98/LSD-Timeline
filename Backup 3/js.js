// Import the THREE.js library
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

// Create variables for the loaded objects
let lsdObject;
let mkultraObject;

// Create separate loaders for the objects
const lsdLoader = new GLTFLoader();
const mkultraLoader = new GLTFLoader();

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
    mkultraObject.position.set(-28, -45, 200); // Position as needed
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

// Instantiate a new renderer and set its size
const renderer1 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer1.setSize(window.innerWidth, window.innerHeight);

const renderer2 = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer2.setSize(window.innerWidth, window.innerHeight);
// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer1.domElement);

document.getElementById("container3D2").appendChild(renderer2.domElement);

// Set how far the camera will be from the 3D model
camera1.position.set(0, 2, 500);
camera2.position.set(0, -50, 500);
// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 500);
topLight.position.set(300, 300, 300); // top-left-ish
const bottomLight = new THREE.DirectionalLight(0xffffff, 500);
bottomLight.position.set(-300, -300, 300); // top-left-ish
topLight.castShadow = false;


const ambientLight = new THREE.AmbientLight(0xffffff, 500);
scene1.add(topLight);
scene1.add(ambientLight);
scene2.add(topLight);
scene2.add(ambientLight);
// Render the scene
function animate() {
  requestAnimationFrame(animate);
  // Add any necessary code to update the scene here

  // Rotate the loaded objects
  if (lsdObject) {
    lsdObject.rotation.x += Math.abs(Math.random()) % 0.02;
    lsdObject.rotation.y += Math.abs(Math.random()) % 0.02;
    lsdObject.rotation.z += Math.abs(Math.random()) % 0.02;
  }
  if (mkultraObject) {
    mkultraObject.rotation.x += Math.abs(Math.random()) % 0.02;
  }

  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
}

// Add a listener to the window for resizing
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();

var slideContainer = document.querySelector('.slides');
slideContainer.addEventListener("scroll", setScrollVar);

var videoContainer = document.getElementById("background-video");
var numBackgroundVideos = 5;

function setScrollVar() {
  const percentOfScreenHeightScrolled = slideContainer.scrollTop / (4 * slideContainer.clientHeight);

  var backgroundVideoID = 1;
  backgroundVideoID = 1 + Math.floor(percentOfScreenHeightScrolled / (1 / numBackgroundVideos));
  videoContainer.src = 'videos/background-' + backgroundVideoID + '.mp4';
}

setScrollVar();


