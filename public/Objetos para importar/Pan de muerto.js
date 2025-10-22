import * as THREE from '../js/three.module.js';

export default function Obj13({ x, y, z }) {
  // 🫓 Pan de muerto 
  var panGroup = new THREE.Group();

  // Base del pan
  var panGeometry = new THREE.SphereGeometry(0.7, 32, 32);
  var panMaterial = new THREE.MeshLambertMaterial({ color: 0xd4a373 });
  var pan = new THREE.Mesh(panGeometry, panMaterial);
  pan.castShadow = true;
  pan.position.set(0, -0.5, 0);
  pan.scale.y = 0.6;
  panGroup.add(pan);

  // Bolita del centro
  var bolitaGeometry = new THREE.SphereGeometry(0.20, 32, 32);
  var bolitaMaterial = new THREE.MeshLambertMaterial({ color: 0xb87b4b });
  var bolita = new THREE.Mesh(bolitaGeometry, bolitaMaterial);
  bolita.castShadow = true;
  bolita.position.set(0, -0.1, 0);
  panGroup.add(bolita);

  // Cruces del pan
  var tiraGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.9, 32);
  var tiraMaterial = new THREE.MeshLambertMaterial({ color: 0xb87b4b });

  var tira1 = new THREE.Mesh(tiraGeometry, tiraMaterial);
  tira1.castShadow = true;
  tira1.rotation.z = 1.57;
  tira1.position.set(0, -0.1, 0);
  panGroup.add(tira1);

  var tira2 = new THREE.Mesh(tiraGeometry, tiraMaterial);
  tira2.castShadow = true;
  tira2.rotation.z = 1.57;
  tira2.rotation.y = 1.57;
  tira2.position.set(0, -0.1, 0);
  panGroup.add(tira2);

  // Posicionamiento del grupo
  panGroup.position.set(x, y, z);

  return panGroup;
}
