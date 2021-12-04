import * as THREE from "https://unpkg.com/three@0.119.0/build/three.module.js"
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js"
import { FontLoader } from "https://threejs.org/examples/jsm/loaders/FontLoader.js";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const geometry = new THREE.SphereGeometry(.1)

const amplifier = 200
const objects = {};
//scene.add(cube)
var colorss = new THREE.Color( 0x008000 );
var colors = new THREE.Color( 0xFF0000 );
var matLite = new THREE.MeshBasicMaterial( {
    color: colors,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide})
var material = new THREE.MeshBasicMaterial( {
    color: colorss,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide})
// var material = new THREE.MeshBasicMaterial( { color: color } )
var font 



    
    
    const loader = new FontLoader();
    loader.load( 'helvetiker_regular.typeface.json' , function ( fontx ) {
font = fontx
})


camera.position.z = 60

controls.update()

function animate() {

    requestAnimationFrame(animate)
    
    controls.update()

	renderer.render(scene, camera)
}

animate()
console.log(matLite)
window.loadDS = function(name, color) {
    console.log(`loading data/DS${name}.txt`)

    fetch(`data/DS${name}.txt`)
        .then(response => response.json())
        .then(response => addMesh(response, color))
}

function addMesh(mesh, color) {
    console.log(matLite)
    
    var i = 0
    mesh.forEach(element => {
        addDot(element, color, i)
        i++
    })
    var zerodot = new THREE.Mesh(geometry, material)
    zerodot.position.set(0,0,0)
    
    scene.add(zerodot)
}

function addDot(coordinates, color, N) {
    const message = `${N}`;

    const shapes = font.generateShapes( message, 0.3 );
    
    
    const geometrys = new THREE.ShapeGeometry( shapes );
    
const text = new THREE.Mesh( geometrys, matLite );
    text.position.set(
        coordinates.x * amplifier, 
        coordinates.y * amplifier, 
        coordinates.z * amplifier
    )

    
    scene.add( text )

    
    var dot = new THREE.Mesh(geometry, material)
    dot.position.set(
        coordinates.x * amplifier, 
        coordinates.y * amplifier, 
        coordinates.z * amplifier
    )
    
    scene.add(dot)
    
};