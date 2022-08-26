//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2FD0ED);

//fondo
var loader = new  THREE.TextureLoader();
loader.load("../starsinthesky.jpg", function(texture){
   scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( {color: "red"} );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z =50;
camera.position.y =0;
camera.position.x =0;

//animación
function animate() {
	requestAnimationFrame( animate );
    /* torus.rotation.x += 0.01; */
	torus.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();