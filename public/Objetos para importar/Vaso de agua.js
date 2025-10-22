import * as THREE from '../js/three.module.js';

export default function Obj16({ x, y, z }) {

  // 🥛 Vaso de agua
  var VasoAgua = new THREE.Group();

  // Parte exterior del vaso
  var vasoGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32, 1, true); 
  var vasoMaterial = new THREE.MeshLambertMaterial({ 
    color: 0xcccccc,
    transparent: true, 
    opacity: 0.4, 
    side: THREE.DoubleSide 
  });
  var vasoExterior = new THREE.Mesh(vasoGeometry, vasoMaterial);
  vasoExterior.castShadow = true;
  vasoExterior.position.y = 0.6;
  VasoAgua.add(vasoExterior);

  // Parte interior (agua)
  var aguaGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.9, 32); 
  var aguaMaterial = new THREE.MeshLambertMaterial({ 
    color: 0x8fd6ff, 
    transparent: true, 
    opacity: 0.7 
  });
  var agua = new THREE.Mesh(aguaGeometry, aguaMaterial);
  agua.castShadow = true;
  agua.position.y = 0.45;
  VasoAgua.add(agua);

  // Posición final del grupo
  VasoAgua.position.set(x, y, z);

  return VasoAgua;
}
