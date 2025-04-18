// Import the THREE.js library
var slideContainer = document.querySelector('.slides');
slideContainer.addEventListener("scroll", setScrollVar);

var videoContainer = document.getElementById("background-video");
var imgContainer = document.getElementById("hidden");
var paragraph = document.getElementById("htext");
var numBackgroundVideos = 5;
var stringArray = [];

// Assign values to the string array
stringArray[0] = "N";
stringArray[2] = "Albert Hofmann was a Swiss chemist born on January 11, 1906, and he passed away on April 29, 2008. He is best known for his discovery of lysergic acid diethylamide (LSD) in 1938 while working for the pharmaceutical company Sandoz (now Novartis). Hofmann's accidental exposure to LSD's psychedelic effects in 1943, famously known as Bicycle Day, played a significant role in the history of psychedelic research. He was a pioneering figure in the field of hallucinogens and continued to study the chemical and its potential applications throughout his career. Hofmann's work has had a lasting impact on the study of psychedelics and altered states of consciousness.";
stringArray[4] = "Bicycle Day refers to April 19, 1943, when Swiss chemist Albert Hofmann intentionally ingested a small amount of lysergic acid diethylamide (LSD), a substance he had synthesized. This marked the first documented experience of the psychedelic effects of LSD. Hofmann, who was riding his bicycle home from work that day, began to feel the mind-altering effects of the drug during his journey, which became known as his trip. Bicycle Day is now commemorated as an annual event by some in the psychedelic community to celebrate the discovery of LSD and the exploration of altered states of consciousness.";
stringArray[12] = "The illegalization of LSD (lysergic acid diethylamide) in many countries began in the late 1960s and early 1970s. This decision was largely influenced by growing concerns over its potential for misuse and the cultural shifts of that era. The U.S. government, for example, classified LSD as a Schedule I controlled substance in 1970, citing its association with the counterculture movement, public safety risks, and the belief that it had no accepted medical use. Since then, many countries have followed suit, imposing strict legal controls on LSD. Despite this, there is an ongoing debate about the medical potential and safety of psychedelics like LSD, with some advocating for research and reconsideration of its legal status in recent years.";
stringArray[9] = "The bus associated with Ken Kesey and the Merry Pranksters is known as Further. It was a brightly painted 1939 International Harvester school bus that became an iconic symbol of the counterculture and the psychedelic movement in the 1960s. Ken Kesey and his group of Merry Pranksters, who were advocates of LSD and experimental living, traveled across the United States in the bus. The bus was decorated with vibrant, psychedelic artwork and fitted with various sound and light equipment to create a mobile environment for their Acid Tests and LSD-fueled gatherings. It played a central role in Tom Wolfe's book The Electric Kool-Aid Acid Test, which chronicled the adventures of Kesey and the Merry Pranksters. Further represented a symbol of freedom, experimentation, and the exploration of altered states of consciousness during this era. It remains an enduring cultural symbol of the 1960s counterculture.";
stringArray[10] = "In the 1960s, the worlds of music and psychedelics converged in a cultural revolution. Psychedelic rock, a genre defined by its fusion of mind-altering substances and music, flourished during this era. Iconic bands like The Beatles, Pink Floyd, and the Grateful Dead became synonymous with this movement. The Grateful Dead were true pioneers of the counterculture and psychedelia. Their live shows were immersive experiences, often enhanced by LSD, where they explored improvisation and created a unique fusion of rock, folk, and blues, known as acid rock. These bands, along with many others, not only produced timeless music but also played a pivotal role in shaping the counterculture movement of the '60s, making the connection between psychedelics and music an enduring part of our cultural history. ";
function setScrollVar() {
  const percentOfScreenHeightScrolled = slideContainer.scrollTop / (6 * slideContainer.clientHeight);

  var backgroundVideoID = 0;
  var prevbackgroundVideoID = backgroundVideoID;
  backgroundVideoID = 1 + Math.floor(percentOfScreenHeightScrolled / (1 / numBackgroundVideos));
  if(prevbackgroundVideoID != backgroundVideoID){
    videoContainer.src = 'videos/background-' + backgroundVideoID + '.mp4';
    imgContainer.src = 'videos/pic-' + backgroundVideoID + '.png';
  paragraph.textContent = stringArray[backgroundVideoID];
    }
}



setScrollVar();

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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

function ensureMaterialsReceiveLight(object) {
  if (!object) return;
  
  object.traverse((node) => {
    if (node.isMesh) {
      // Check if the material exists
      if (node.material) {
        // Create a more compatible material
        const oldMaterial = node.material;
        
        // Create a new material that works better on macOS
        const newMaterial = new THREE.MeshPhongMaterial({
          color: oldMaterial.color || 0xffffff,
          emissive: oldMaterial.emissive || 0x000000,
          specular: 0x111111,
          shininess: 30,
          flatShading: false
        });
        
        // Preserve maps if they exist
        if (oldMaterial.map) newMaterial.map = oldMaterial.map;
        if (oldMaterial.normalMap) newMaterial.normalMap = oldMaterial.normalMap;
        
        // Apply the new material
        node.material = newMaterial;
      }
    }
  });
}


// Load "lsdtitle.glb"
lsdLoader.load(
  `animations/lsdtitle.glb`,
  function (gltf) {
    lsdObject = gltf.scene;
    lsdObject.position.set(0, -20, 50); // Adjust the Y value to position it higher on the page
    
    ensureMaterialsReceiveLight(lsdObject);
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
    ensureMaterialsReceiveLight(mkultraObject);
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
    bikeObject.position.set(0, 0, 0); // Adjust the Y value to position it higher on the page
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
    musicObject.scale.set(20,20,20);
    ensureMaterialsReceiveLight(musicObject);
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
camera1.position.set(-10, 2, 500);
camera2.position.set(0, -50, 500);
camera3.position.set(150, 2, 500);
camera4.position.set(155, -5, 500);
camera5.position.set(125 , -5, 500);
/* Add lights to the scene
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
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Reduced intensity for ambient light

// Main directional light (simulates sunlight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 100, 100);
directionalLight.castShadow = true;

// Additional fill light from another angle
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-100, 50, 50);

// Add a soft light from below for more balanced lighting
const bottomLight = new THREE.DirectionalLight(0xffffff, 0.3);
bottomLight.position.set(0, -100, 0);*/

// Function to add all lights to a scene
function addLightsToScene(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);
  
  // Strong hemispheric light (works better on macOS than directional sometimes)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
  hemiLight.position.set(0, 300, 0);
  scene.add(hemiLight);
  
  // Add multiple point lights for better coverage
  const pointLight1 = new THREE.PointLight(0xffffff, 1.0);
  pointLight1.position.set(100, 100, 100);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0xffffff, 1.0);
  pointLight2.position.set(-100, 100, 100);
  scene.add(pointLight2);
  
  // Add a light directly in front of the model
  const frontLight = new THREE.PointLight(0xffffff, 1.0);
  frontLight.position.set(0, 0, 300);
  scene.add(frontLight);
}

function addLessLightsToScene(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);
  
  // Strong hemispheric light (works better on macOS than directional sometimes)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemiLight.position.set(0, 300, 0);
  scene.add(hemiLight);
  
  // Add multiple point lights for better coverage
  const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
  pointLight1.position.set(100, 100, 100);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0xffffff, 0.8);
  pointLight2.position.set(-100, 100, 100);
  scene.add(pointLight2);
  
  // Add a light directly in front of the model
  const frontLight = new THREE.PointLight(0xffffff, 0.8);
  frontLight.position.set(0, 0, 300);
  scene.add(frontLight);
}

function addEvenLessLightsToScene(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.1);
  scene.add(ambient);
  
  // Strong hemispheric light (works better on macOS than directional sometimes)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
  hemiLight.position.set(0, 300, 0);
  scene.add(hemiLight);
  
  // Add multiple point lights for better coverage
  const pointLight1 = new THREE.PointLight(0xffffff, 0.6);
  pointLight1.position.set(100, 100, 100);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0xffffff, 0.6);
  pointLight2.position.set(-100, 100, 100);
  scene.add(pointLight2);
  
  // Add a light directly in front of the model
  const frontLight = new THREE.PointLight(0xffffff, 0.6);
  frontLight.position.set(0, 0, 300);
  scene.add(frontLight);
}
// Add lights to all scenes
addLightsToScene(scene1);
addLessLightsToScene(scene2);
addLightsToScene(scene3);
addLightsToScene(scene4);
addEvenLessLightsToScene(scene5);
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
    object7.scale.set( 40,40,40);
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
    object8.scale.set( 10, 10, 10);
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



/* Add lights to the scenes 6, 7, and 8
scene6.add(topLight);
scene6.add(ambientLight);
scene7.add(topLight);
scene7.add(ambientLight);
scene8.add(topLight);
scene8.add(ambientLight);
*/


addLightsToScene(scene6);
addLightsToScene(scene7);
addLightsToScene(scene8);


animate();




