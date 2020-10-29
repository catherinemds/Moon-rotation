let camera, scene, renderer, sphere;

function init() {
	//Init scene 
	scene = new THREE.Scene();

	//Init camera (PerspectiveCamera)
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	//Init renderer
	renderer = new THREE.WebGLRenderer();

	//Set size (whole window)
	renderer.setSize(window.innerWidth,
	window.innerHeight);

	// Render to canvas element 
	document.body.appendChild(renderer.domElement);

	// Init SphereGeometry object 
	const geometry = new THREE.SphereGeometry( 5, 32, 32 );

	// Create material with color
	const material = new THREE.MeshBasicMaterial({
		color: 0xffff00
	});

	// Add Texture
	//

	//Create mesh with geo and material
	sphere = new THREE.Mesh(geometry, material);

	// Add to scene
	scene.add(sphere);

	// Position camera
	camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed 
function animate() {
	requestAnimationFrame(animate);

	//Rotate the sphere

	sphere.rotation.y += 0.02;

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;

	// After making changes to aspect 
	camera.updateProjectionMatrix();

	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}	

window.addEventListener('resize', onWindowResize, false);

init();
animate();