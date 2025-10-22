import * as THREE from '../js/three.module.js';
export default function Obj02 ({x,y,z}){

//vaso de barro

var g3 = new THREE.SphereGeometry(5,20,20);
var m3 = new THREE.MeshLambertMaterial ({
    color: 0x9E4A00, side : THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(g3,m3);
mesh03.castShadow = true;
mesh03.position.set(0,5,0);

var g4 = new THREE.ConeGeometry(4,6,30,1,0,3,9);
var m4 = new THREE.MeshBasicMaterial({
    color:0x9E4A00, side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(g4,m4);
mesh04.castShadow = true;
mesh04.position.set(0,8,0);
mesh04.rotation.set(3.14,0,0);

var g5 = new THREE.TorusGeometry(4,1,50,50);
var m5 = new THREE.MeshBasicMaterial({
    color:0x27B871, side:THREE.DoubleSide
})
var mesh05 = new THREE.Mesh(g5,m5);
mesh05.castShadow = true;
mesh05.position.set(0,5,0);
mesh05.rotation.set(1.57,0,0);

var g6 = new THREE.TorusGeometry(2.5,.8,50,50);
var m6 = new THREE.MeshBasicMaterial({
    color:0x9E4A00, side:THREE.DoubleSide
})
var mesh06 = new THREE.Mesh(g6,m6);
mesh06.castShadow = true;
mesh06.position.set(5,5,0);

//Chocolate
var g7 = new THREE.SphereGeometry(4.5,20,20);
var m7 = new THREE.MeshLambertMaterial ({
    color: 0x824F0C, side : THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(g7,m7);
mesh07.castShadow = true;
mesh07.position.set(0,6,0);

var chocolate = new THREE.Group();
chocolate.add(mesh03, mesh04, mesh05, mesh06, mesh07);
chocolate.position.set(x,y,z);
return chocolate;

}