import * as THREE from '../js/three.module.js';

export default function Obj14({ x, y, z }) {

  // 🍾 Grupo de la botella
  var botellaGroup = new THREE.Group();

  // Cuerpo del vaso (vidrio)
  var cuerpoGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.5, 32);
  var cuerpoMaterial = new THREE.MeshLambertMaterial({
    color: 0xcccccc,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
  });
  var cuerpo = new THREE.Mesh(cuerpoGeometry, cuerpoMaterial);
  cuerpo.position.y = 0.10;
  cuerpo.castShadow = true; 
  botellaGroup.add(cuerpo);

  // Líquido de la botella
  var liquidoGeometry = new THREE.CylinderGeometry(0.28, 0.28, 0.8, 32);
  var liquidoMaterial = new THREE.MeshLambertMaterial({
    color: 0x8b4513,
    transparent: true,
    opacity: 0.8
  });
  var liquido = new THREE.Mesh(liquidoGeometry, liquidoMaterial);
  liquido.position.y = 0;
  liquido.castShadow = true; 
  botellaGroup.add(liquido);

  // Cuello de la botella
  var cuelloGeometry = new THREE.CylinderGeometry(0.16, 0.2, 0.8, 32);
  var cuello = new THREE.Mesh(cuelloGeometry, cuerpoMaterial);
  cuello.position.y = 0.80;
  cuello.castShadow = true;
  botellaGroup.add(cuello);

  // Tapón
  var taponGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.2, 32);
  var taponMaterial = new THREE.MeshLambertMaterial({ color: 0x3e2723 });
  var tapon = new THREE.Mesh(taponGeometry, taponMaterial);
  tapon.position.y = 1.3;
  tapon.castShadow = true; 
  botellaGroup.add(tapon);

  // Posición final del grupo
  botellaGroup.position.set(x, y, z);

  return botellaGroup;
}
