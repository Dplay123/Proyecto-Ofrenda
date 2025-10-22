import * as THREE from '../js/three.module.js';

export default function Obj17({ x, y, z }) {

  // 🔥 Grupo de la vela
  var Vela = new THREE.Group();

  // Cuerpo de la vela
  var velaGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32);
  var velaMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
  var vela = new THREE.Mesh(velaGeometry, velaMaterial);
  vela.castShadow = true;
  vela.position.y = 0.25; 
  Vela.add(vela);

  // Mecha
  var mechaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.05, 16);
  var mechaMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 }); 
  var mecha = new THREE.Mesh(mechaGeometry, mechaMaterial);
  mecha.castShadow = true;
  mecha.position.y = 0.53; 
  Vela.add(mecha);

  // Llama
  var llamaGeometry = new THREE.ConeGeometry(0.10, 0.50, 20);
  var llamaMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 }); 
  var llama = new THREE.Mesh(llamaGeometry, llamaMaterial);
  llama.castShadow = true;
  llama.position.y = 0.6; 
  Vela.add(llama);

  // Posición del grupo
  Vela.position.set(x, y, z);

  return Vela;
}

