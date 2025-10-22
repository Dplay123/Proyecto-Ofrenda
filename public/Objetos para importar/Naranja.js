import * as THREE from '../js/three.module.js';

export default function Obj19({ x, y, z }) {

  // 🍊 Grupo de la naranja
  var Naranja = new THREE.Group();

  // Naranja principal
  var naranjaGeometry = new THREE.SphereGeometry(0.30, 32, 32);
  var naranjaMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
  var naranja = new THREE.Mesh(naranjaGeometry, naranjaMaterial);
  naranja.castShadow = true;
  naranja.position.set(0, 0, 0);
  Naranja.add(naranja);

  // Tallo
  var talloGeometry = new THREE.CylinderGeometry(0.015, 0.015, 0.1, 6);
  var talloMaterial = new THREE.MeshLambertMaterial({ color: 0x2e8b57 });
  var tallo = new THREE.Mesh(talloGeometry, talloMaterial);
  tallo.castShadow = true;
  tallo.position.set(0, 0.35, 0); // 0.3 + 0.05
  Naranja.add(tallo);

  // Posición del grupo
  Naranja.position.set(x, y, z);

  return Naranja;
}


