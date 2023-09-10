
// Sample data array
const dataArray = [
    {
        id: 1,
        name: "Custom Model",
        status: "Active",
        level: 0.6,
        gltfPath: "/assets/buster_drone/scene.gltf", 
        scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    },
    {
        id: 2,
        name: "Custom Model",
        status: "Active",
        level: 0.2,
        gltfPath: "/assets/buster_drone/scene.gltf", 
        scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    },
    {
        id: 3,
        name: "Custom Model",
        status: "Active",
        level: 0.2,
        gltfPath: "/assets/buster_drone/scene.gltf", 
        scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    },
    {
        id: 4,
        name: "Custom Model",
        status: "Active",
        level: 0.6,
        gltfPath: "/assets/buster_drone/scene.gltf", 
        scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    },
    // {
    //     id: 2,
    //     name: "Custom Model",
    //     status: "Active",
    //     level: 0.2,
    //     gltfPath: "/assets/buster_drone/scene.gltf", 
    //     scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    // },
    // {
    //     id: 2,
    //     name: "Custom Model",
    //     status: "Active",
    //     level: 0.6,
    //     gltfPath: "/assets/buster_drone/scene.gltf", 
    //     scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    // },
    // {
    //     id: 2,
    //     name: "Custom Model",
    //     status: "Active",
    //     level: 0.6,
    //     gltfPath: "/assets/buster_drone/scene.gltf", 
    //     scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    // },
    // {
    //     id: 2,
    //     name: "Custom Model",
    //     status: "Active",
    //     level: 0.2,
    //     gltfPath: "/assets/buster_drone/scene.gltf", 
    //     scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    // },
    // {
    //     id: 2,
    //     name: "Custom Model",
    //     status: "Active",
    //     level: 0.6,
    //     gltfPath: "/assets/buster_drone/scene.gltf", 
    //     scale: { x: 1, y: 1, z: 1 }, // Adjust scale
    // },
];


// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('content').appendChild(renderer.domElement);


// Set the camera position
camera.position.set(7, 25, 35);
camera.rotation.x = -Math.PI / 4;

// Create a full-screen 3D floor with shadows
const floorGeometry = new THREE.PlaneGeometry(window.innerWidth * 2, window.innerHeight * 2, 30, 30);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x212121 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1; // Adjust the position to be below the boxes
floor.receiveShadow = true;
scene.add(floor);

// Create a THREE.GLTFLoader
const loader = new THREE.GLTFLoader();

// function addTransparentRotatingSquareBox(scene, model, color, opacity) {
//     // Calculate the bounding box of the model
//     const bbox = new THREE.Box3().setFromObject(model);

//     // Calculate the dimensions of the square box based on the model's bounding box
//     const width = bbox.max.x - bbox.min.x;
//     const depth = bbox.max.z - bbox.min.z;
//     const height = 0.1; // Adjust the height as needed

//     // Calculate the position for the square box
//     const center = new THREE.Vector3();
//     bbox.getCenter(center);

//     // Create a box geometry for the square box
//     const boxGeometry = new THREE.BoxGeometry(width, height, depth);

//     // Create a material for the square box with transparency
//     const boxMaterial = new THREE.MeshBasicMaterial({
//         color: color,
//         transparent: true, // Enable transparency
//         opacity: opacity, // Set opacity value (0.0 to 1.0)
//     });

//     // Create a mesh with the box geometry and material
//     const squareBox = new THREE.Mesh(boxGeometry, boxMaterial);

//     // Position the square box at the bottom of the model
//     squareBox.position.copy(center);
//     squareBox.position.y = bbox.min.y - height / 2;

//     // Add the square box to the scene
//     scene.add(squareBox);

//     // Create an animation function to rotate the square box
//     const rotateSquareBox = () => {
//         squareBox.rotation.y += 0.02; // Adjust the rotation speed as needed

//         // Request the next animation frame
//         requestAnimationFrame(rotateSquareBox);
//     };

//     // Start the rotation animation
//     rotateSquareBox();
// }

function addRadarAnimation(scene, model, color, level) {
    const bbox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    bbox.getCenter(center);

    // Calculate the radius based on the bounding box dimensions
    const modelSize = Math.max(bbox.max.x - bbox.min.x, bbox.max.z - bbox.min.z);

    // Create a flat radar plane
    const radarGeometry = new THREE.CircleGeometry(modelSize / 2, 32);
    const radarMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2 // Adjust opacity as needed
    });
    const radar = new THREE.Line(radarGeometry, radarMaterial);

    // Position the radar at the bottom of the model
    radar.rotation.x = Math.PI / 2; // Rotate the radar to be flat
    radar.position.copy(center);
    radar.position.y = bbox.min.y + 0.01; // Adjust the height just above the model's bottom

    scene.add(radar);

    const radarAnimation = () => {
        radar.rotation.z += 0.007; // Adjust the rotation speed as needed
        requestAnimationFrame(radarAnimation);
    };

    if (level < 0.6) {
        radarAnimation(); // Start the radar animation when the level is below 0.6
    }
}

// Function to create a text label
function createTextLabel(text, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 40px Arial';
    context.fillStyle = 'white';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);

    sprite.scale.set(2, 1); // Adjust scale as needed
    return sprite;
}


// Create boxes based on the data array
dataArray.forEach((dataItem, index) => {
    // Determine the color based on the level data
    let boxColor;
    if (dataItem.level < 0.3) {
        boxColor = 0xff0000; // Red for low levels
    } else if (dataItem.level < 0.7) {
        boxColor = 0x00ff00; // Green for medium levels
    } else {
        boxColor = 0x0000ff; // Blue for high levels
    }

    if (dataItem.gltfPath) {
        loader.load(dataItem.gltfPath, (gltf) => {
            const model = gltf.scene;
            
            model.scale.set(
                dataItem.scale.x,
                dataItem.scale.y,
                dataItem.scale.z
            );
            const yOffset = 0.5; 
            const xOffset = (index % 3 - 1) * 6; 
            const zOffset = Math.floor(index / 3) * 6; 
            model.position.set(xOffset, yOffset, zOffset); 
            model.castShadow = true;
            scene.add(model);

            const pointLight = new THREE.PointLight(boxColor, 1, 6); // Color, Intensity, Distance
            pointLight.position.copy(model.position);
            scene.add(pointLight);

            if (dataItem.level < 0.6) {
                //addTransparentRotatingSquareBox(scene, model, boxColor, 0.1); 
                addRadarAnimation(scene, model, boxColor, dataItem.level);
            }

            // Create and add the text label
            const levelPercentage = (dataItem.level * 100).toFixed(0);
            const label = createTextLabel(levelPercentage + " %", boxColor);
            label.position.copy(model.position);
            label.position.y += 1; // Adjust the vertical position of the label
            scene.add(label);

        });
    } 
    
    
});

// Add ambient light to the scene
//const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color, Intensity
//scene.add(ambientLight);

// Add directional light for shadows
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 10, 5);
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.width = 1024;
// directionalLight.shadow.mapSize.height = 1024;
// scene.add(directionalLight);
// Sun light
const sunLight = new THREE.DirectionalLight(0xffffff, 1.5); // Color, Intensity (1 is default)
sunLight.position.set(1, 1, -1); // Adjust the position for the sun's direction
scene.add(sunLight);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 1024;  // Width of shadow map texture
sunLight.shadow.mapSize.height = 1024; // Height of shadow map texture

// Set up shadow properties for the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Create an THREE.OrbitControls object to enable camera movement
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Add damping for smoother movement (optional)
controls.dampingFactor = 0.05; // Adjust damping factor (optional)
controls.rotateSpeed = 0.5; // Adjust rotation speed (optional)

// Handle window resize for aspect ratio update
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Render the scene
function animate() {
    requestAnimationFrame(animate);

    // Update the THREE.OrbitControls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);

}

// Start the animation loop
animate();
