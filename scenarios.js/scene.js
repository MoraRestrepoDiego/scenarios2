//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog( 0xffffff, 2, 9 ); 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( {color: 0x83FF00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z =7;

//animación
function animate() {
	requestAnimationFrame( animate );
    /* cube.rotation.x += 0.01; */
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();