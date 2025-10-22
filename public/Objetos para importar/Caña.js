import * as THREE from '../js/three.module.js';

export default function Obj20({ x, y, z }) {

//cañas
var geometry2 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material2 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder2 = new THREE.Mesh( geometry2, material2 ); 
cylinder2.castShadow = true;
cylinder2.position.set(-6.2, -1.7, 0);
cylinder2.rotation.set (0,0,1.55);

var geometry3 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material3 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder3 = new THREE.Mesh( geometry3, material3 ); 
cylinder3.castShadow = true;
cylinder3.position.set(-6.2, -1.7, 0);
cylinder3.rotation.set (0,0,1.55);

var geometry4 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material4 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder4 = new THREE.Mesh( geometry4, material4 ); 
cylinder4.castShadow = true;
cylinder4.position.set(-6.2, -1.7, 1.2);
cylinder4.rotation.set (0,0,1.55);

var geometry5 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material5 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder5 = new THREE.Mesh( geometry5, material5 ); 
cylinder5.castShadow = true;
cylinder5.position.set(-6.2, -1.7, 1.2);
cylinder5.rotation.set (0,0,1.55);

var geometry6 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material6 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder6 = new THREE.Mesh( geometry6, material6 ); 
cylinder6.castShadow = true;
cylinder6.position.set(-6.2, -1.7, 2.5);
cylinder6.rotation.set (0,0,1.55);

var geometry7 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material7 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder7 = new THREE.Mesh( geometry7, material7 ); 
cylinder7.castShadow = true;
cylinder7.position.set(-6.2, -1.7, 2.5);
cylinder7.rotation.set (0,0,1.55);

var geometry8 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material8 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder8 = new THREE.Mesh( geometry8, material8 ); 
cylinder8.castShadow = true;
cylinder8.position.set(-6.2, -0.7, 1.8);
cylinder8.rotation.set (0,0,1.55);

var geometry9 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material9 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder9 = new THREE.Mesh( geometry9, material9 ); 
cylinder9.castShadow = true;
cylinder9.position.set(-6.2, -0.7, 1.8);
cylinder9.rotation.set (0,0,1.55);

var geometry10 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material10 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder10 = new THREE.Mesh( geometry10, material10 ); 
cylinder10.castShadow = true;
cylinder10.position.set(-6.2, -0.7, 0.6);
cylinder10.rotation.set (0,0,1.55);

var geometry11 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material11 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder11 = new THREE.Mesh( geometry11, material11 ); 
cylinder11.castShadow = true;
cylinder11.position.set(-6.2, -0.7, 0.6);
cylinder11.rotation.set (0,0,1.55);

var geometry12 = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 ); 
var material12 = new THREE.MeshLambertMaterial( {color: 0x38D124} ); 
var cylinder12 = new THREE.Mesh( geometry12, material12 ); 
cylinder12.castShadow = true;
cylinder12.position.set(-6.2, 0.2, 1.3);
cylinder12.rotation.set (0,0,1.55);

var geometry13 = new THREE.CylinderGeometry( 0.4, 0.4, 5.1, 32 ); 
var material13 = new THREE.MeshLambertMaterial( {color: 0xFCFF9C} ); 
var cylinder13 = new THREE.Mesh( geometry13, material13 ); 
cylinder13.castShadow = true;
cylinder13.position.set(-6.2, 0.2, 1.3);
cylinder13.rotation.set (0,0,1.55);

    var Caña = new THREE.Group();
    Caña.add(cylinder2, cylinder3, cylinder4, cylinder5,
    cylinder6, cylinder7, cylinder8, cylinder9,
    cylinder10, cylinder11, cylinder12, cylinder13);
    Caña.position.set(x,y,z);
    return Caña;
}


