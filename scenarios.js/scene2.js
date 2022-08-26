//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2FD0ED);

//fondo
 var loader = new  THREE.TextureLoader();
 loader.load("../fondo1.jpg", function(texture){
    scene.background = texture;
 });

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x83FF00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z =5;
camera.position.y =0;
camera.position.x =0;

//animación
function animate() {
	requestAnimationFrame( animate );
    /* capsule.rotation.x += 0.01; */
	capsule.rotation.y += 0.05;
	renderer.render( scene, camera );
}
animate();