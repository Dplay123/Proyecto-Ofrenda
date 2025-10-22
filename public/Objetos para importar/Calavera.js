import * as THREE from '../js/three.module.js';
import { RoundedBoxGeometry } from '../js/RoundedBoxGeometry.js';
export default function Obj01 ({x,y,z}){

  // craneo
  var g2 = new RoundedBoxGeometry(6,6,5,15,2);
  var m2 = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF, side: THREE.DoubleSide
  });
  var mesh02 = new THREE.Mesh(g2,m2);
  mesh02.position.set(0,5.3,2);
  mesh02.castShadow = true;

  var g3 = new THREE.SphereGeometry(5,20,20);
  var m3 = new THREE.MeshLambertMaterial ({
      color: 0XFFFFFF, side : THREE.DoubleSide
  });
  var mesh03 = new THREE.Mesh(g3,m3);
  mesh03.position.set(0,10,0);
  mesh03.castShadow = true;

  //Huecos Ojos, Nariz 
  var g4 = new THREE.SphereGeometry(1.3,20,20);
  var m4 = new THREE.MeshLambertMaterial ({
      color: 0X000000, side : THREE.DoubleSide
  });
  var mesh04 = new THREE.Mesh(g4,m4);
  mesh04.position.set(2,10,4.5);
  mesh04.castShadow = true;

  var g5 = new THREE.SphereGeometry(1.3,20,20);
  var m5 = new THREE.MeshLambertMaterial ({
      color: 0X000000, side : THREE.DoubleSide
  });
  var mesh05 = new THREE.Mesh(g5,m5);
  mesh05.position.set(-2,10,4.5);
  mesh05.castShadow = true;

  var g6 = new RoundedBoxGeometry(1,1,2,15,2);
  var m6 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh06 = new THREE.Mesh(g6,m6);
  mesh06.position.set(0.4,7.5,4.5);
  mesh06.rotation.set(1.57,0.785,0);
  mesh06.castShadow = true;

  var g7 = new RoundedBoxGeometry(1,1,2,15,2);
  var m7 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh07 = new THREE.Mesh(g7,m7);
  mesh07.position.set(-0.4,7.5,4.5);
  mesh07.rotation.set(1.57,-0.785,0); 
  mesh07.castShadow = true;
  
  //Dientes
  var g8 = new RoundedBoxGeometry(.5,.5,3.5,2,2);
  var m8 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh08 = new THREE.Mesh(g8,m8);
  mesh08.position.set(0,5,4.75);
  mesh08.rotation.set(0,1.57,0);
  mesh08.castShadow = true;

  var g9 = new RoundedBoxGeometry(.4,.5,1.5,2,2);
  var m9 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh09 = new THREE.Mesh(g9,m9);
  mesh09.position.set(0,5,4.75);
  mesh09.rotation.set(1.57,0,0);
  mesh09.castShadow = true;

  var g10 = new RoundedBoxGeometry(.4,.5,1.5,2,2);
  var m10 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh10 = new THREE.Mesh(g10,m10);
  mesh10.position.set(.6,5,4.75);
  mesh10.rotation.set(1.57,0,0);
  mesh10.castShadow = true;

  var g11 = new RoundedBoxGeometry(.4,.5,1.5,2,2);
  var m11 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh11 = new THREE.Mesh(g11,m11);
  mesh11.position.set(1.2,5,4.75);
  mesh11.rotation.set(1.57,0,0);
  mesh11.castShadow = true;

  var g12 = new RoundedBoxGeometry(.4,.5,1.5,2,2);
  var m12 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh12 = new THREE.Mesh(g12,m12);
  mesh12.position.set(-1.2,5,4.75);
  mesh12.rotation.set(1.57,0,0);
  mesh12.castShadow = true;

  var g13 = new RoundedBoxGeometry(.4,.5,1.5,2,2);
  var m13 = new THREE.MeshLambertMaterial({
      color: 0x000000, side: THREE.DoubleSide
  });
  var mesh13 = new THREE.Mesh(g13,m13);
  mesh13.position.set(-.6,5,4.75);
  mesh13.rotation.set(1.57,0,0);
  mesh13.castShadow = true;

  var calavera = new THREE.Group();
  calavera.add(mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13);
  calavera.position.set(x,y,z);
  return calavera;
}
