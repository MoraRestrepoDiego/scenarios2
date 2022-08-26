//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2FD0ED);
scene.fog = new THREE.Fog(0x00FBFF, 2, 15)

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( {color: "blue"} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z =10;
camera.position.y =0;
camera.position.x =0;

//animación
function animate() {
	requestAnimationFrame( animate );
    /* cone.rotation.x += 0.01; */
	cone.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();