import * as THREE from '../js/three.module.js';

export default function Obj22({ x, y, z }) {

//pozole
var geometryP = new THREE.CylinderGeometry( 2, 0.6, 1.3, 37 ); 
var materialP = new THREE.MeshLambertMaterial( {color: 0x2847B5} ); 
var cylinderP = new THREE.Mesh( geometryP, materialP ); 
cylinderP.castShadow = true;
cylinderP.position.set(3, -2.5, 2);

var geometryPZ = new THREE.CylinderGeometry( 1.9, 0.6, 1.3, 37 ); 
var materialPZ = new THREE.MeshLambertMaterial( {color: 0xE62E1C} ); 
var cylinderPZ = new THREE.Mesh( geometryPZ, materialPZ ); 
cylinderPZ.castShadow = true;
cylinderPZ.position.set(3, -2.35, 2);

//pozolemaiz
var geometrym = new THREE.SphereGeometry( 0.2, 6, 16 ); 
var materialm = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
var spherem = new THREE.Mesh( geometrym, materialm ); 
spherem.castShadow = true;
spherem.position.set(3, -1.4, 2);

var geometrym2 = new THREE.SphereGeometry( 0.2, 6, 16 ); 
var materialm2 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
var spherem2 = new THREE.Mesh( geometrym2, materialm2 ); 
spherem2.castShadow = true;
spherem2.position.set(3, -1.4, 1);

var geometrym3 = new THREE.SphereGeometry( 0.2, 6, 16 ); 
var materialm3 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
var spherem3 = new THREE.Mesh( geometrym3, materialm3 ); 
spherem3.castShadow = true;
spherem3.position.set(3, -1.4, 3);

var geometrym4 = new THREE.SphereGeometry( 0.2, 6, 16 ); 
var materialm4 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
var spherem4 = new THREE.Mesh( geometrym4, materialm4 ); 
spherem4.castShadow = true;
spherem4.position.set(3.5, -1.4, 2);

var geometrym5= new THREE.SphereGeometry( 0.2, 6, 16 ); 
var materialm5 = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
var spherem5 = new THREE.Mesh( geometrym5, materialm5 ); 
spherem5.castShadow = true;
spherem5.position.set(2.3, -1.4, 2);

var Pozole= new THREE.Group();
Pozole.add(cylinderP,cylinderPZ,spherem,spherem2,spherem3,spherem4,spherem5);
Pozole.position.set(x,y,z);
return Pozole;

}
