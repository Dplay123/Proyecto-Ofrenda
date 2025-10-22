import * as THREE from '../js/three.module.js';

export default function Obj15({ x, y, z }) {
  // 🍲 Grupo del plato con pollo
  var PlatoPollo = new THREE.Group();

  // Plato 
  var platoGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32);
  var platoMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
  var plato = new THREE.Mesh(platoGeometry, platoMaterial);
  plato.castShadow = true;
  plato.position.y = 0.1;
  PlatoPollo.add(plato);

  // Mole 
  var moleGeometry = new THREE.CylinderGeometry(1, 1, 0.3, 32);
  var moleMaterial = new THREE.MeshLambertMaterial({ color: 0x5c1a00 });
  var mole = new THREE.Mesh(moleGeometry, moleMaterial);
  mole.castShadow = true;
  mole.position.y = 0.25;
  PlatoPollo.add(mole);

  // Pierna de pollo 
  var piernaGeometry = new THREE.CylinderGeometry(0.15, 0.25, 0.8, 32); 
  var piernaMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc99 }); 
  var pierna = new THREE.Mesh(piernaGeometry, piernaMaterial);
  pierna.castShadow = true;
  pierna.position.set(0.4, 0.65, 0); 
  pierna.rotation.x = Math.PI / 4; 
  PlatoPollo.add(pierna);

  // Posición final
  PlatoPollo.position.set(x, y, z);

  return PlatoPollo;
}
