import * as THREE from '../js/three.module.js';

export default function Obj23({ x, y, z }) {
  // vela1
  var geometry = new THREE.CylinderGeometry( 1.2, 0.8, 2.5, 35 );
  var material = new THREE.MeshLambertMaterial( {color: 0x8E57C2} );
  var cylinder = new THREE.Mesh( geometry, material ); 
  cylinder.castShadow = true;
  cylinder.position.set(0, -1.9, 2);

  var geometry1 = new THREE.CylinderGeometry( 1, 0.6, 2.3, 33 );
  var material1 = new THREE.MeshLambertMaterial( {color: 0xF5F5ED} );
  var cylinder1 = new THREE.Mesh( geometry1, material1 ); 
  cylinder1.castShadow = true;
  cylinder1.position.set(0, -1.7, 2);

  var geometry2 = new THREE.CylinderGeometry( 0.02, 0.02, 0.5, 16 );
  var material2 = new THREE.MeshLambertMaterial( {color: 0x17181A} );
  var cylinder2 = new THREE.Mesh( geometry2, material2 ); 
  cylinder2.castShadow = true;
  cylinder2.position.set(0, -0.5, 2);

  var Veladora= new THREE.Group();
  Veladora.add(cylinder, cylinder1, cylinder2);
  Veladora.position.set(x,y,z);
  return Veladora;
}

