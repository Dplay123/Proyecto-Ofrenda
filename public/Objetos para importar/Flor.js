import * as THREE from '../js/three.module.js';
import { RoundedBoxGeometry } from '../js/RoundedBoxGeometry.js';

export default function Obj27({ x, y, z }) {

    var g2 = new RoundedBoxGeometry(2,8,2,8,4);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFF7B00, side: THREE.DoubleSide
    });

    var mesh02 = new THREE.Mesh(g2,m2);
    mesh02.castShadow = true;
    mesh02.position.set(0,0,0);

    var mesh03 = new THREE.Mesh(g2,m2);
    mesh03.castShadow = true;
    mesh03.rotation.set(0,0,0.785);

    var mesh04 = new THREE.Mesh(g2,m2);
    mesh04.castShadow = true;
    mesh04.rotation.set(0,0,1.57);

    var mesh05 = new THREE.Mesh(g2,m2);
    mesh05.castShadow = true;
    mesh05.rotation.set(0,0,2.36);

    var mesh06 = new THREE.Mesh(g2,m2);
    mesh06.castShadow = true;
    mesh06.rotation.set(0,0.785,0.785);

    var mesh07 = new THREE.Mesh(g2,m2);
    mesh07.castShadow = true;
    mesh07.rotation.set(0,0.785,1.57);

    var mesh08 = new THREE.Mesh(g2,m2);
    mesh08.castShadow = true;
    mesh08.rotation.set(0,0.785,2.36);

    var mesh09 = new THREE.Mesh(g2,m2);
    mesh09.castShadow = true;
    mesh09.rotation.set(0,-0.785,0.785);

    var mesh10 = new THREE.Mesh(g2,m2);
    mesh10.castShadow = true;
    mesh10.rotation.set(0,-0.785,1.57);

    var mesh11 = new THREE.Mesh(g2,m2);
    mesh11.castShadow = true;
    mesh11.rotation.set(0,-0.785,2.36);

    var mesh12 = new THREE.Mesh(g2,m2);
    mesh12.castShadow = true;
    mesh12.rotation.set(0,1.57,0.785);

    var mesh13 = new THREE.Mesh(g2,m2);
    mesh13.castShadow = true;
    mesh13.rotation.set(0,1.57,1.57);

    var mesh14 = new THREE.Mesh(g2,m2);
    mesh14.castShadow = true;
    mesh14.rotation.set(0,1.57,2.36);

    var FLo1 = new THREE.Group();
    FLo1.add(mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14);
    FLo1.position.set(x,y,z);
    return FLo1;
}
