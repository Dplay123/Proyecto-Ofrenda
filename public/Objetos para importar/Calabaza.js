import * as THREE from '../js/three.module.js';

export default function Obj18({ x, y, z }) {

  // 🎃 Grupo de la calabaza
  var Calabaza = new THREE.Group();

  // Cuerpo de la calabaza
  var calabazaGeometry = new THREE.IcosahedronGeometry(0.8, 0);
  var calabazaMaterial = new THREE.MeshLambertMaterial({ 
    color: 0xff7518, 
    flatShading: true 
  });
  var calabaza = new THREE.Mesh(calabazaGeometry, calabazaMaterial);
  calabaza.scale.y = 0.8;
  calabaza.castShadow = true;
  Calabaza.add(calabaza);

  // Tallo
  var talloGeometry = new THREE.CylinderGeometry(0.03, 0.07, 0.25, 6);
  var talloMaterial = new THREE.MeshLambertMaterial({ color: 0x3b6b3b });
  var tallo = new THREE.Mesh(talloGeometry, talloMaterial);
  tallo.position.y = 0.69;
  tallo.rotation.z = 0.2;
  tallo.castShadow = true;
  Calabaza.add(tallo);

  // Posición del grupo
  Calabaza.position.set(x, y, z);

  return Calabaza;
}

