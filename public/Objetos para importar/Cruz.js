import * as THREE from '../js/three.module.js';

export default function Obj21({ x, y, z }) {

  var cruz = new THREE.MeshLambertMaterial({ color: 0x6b3f1f });

  var geometryVertical = new THREE.BoxGeometry(1, 6, 0.5);
  var cruzVertical = new THREE.Mesh(geometryVertical, cruz);
  cruzVertical.castShadow = true;

  var geometryHorizontal = new THREE.BoxGeometry(5, 1, 0.5);
  var cruzHorizontal = new THREE.Mesh(geometryHorizontal, cruz);
  cruzHorizontal.castShadow = true;
  cruzHorizontal.position.set(0, 1, 0);

  //scene.add(cruzVertical, cruzHorizontal);

  var Cruz = new THREE.Group();
  Cruz.add(cruzVertical, cruzHorizontal);
  Cruz.position.set(x, y, z);
  return Cruz;
}


  