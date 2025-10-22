import * as THREE from '../js/three.module.js';

export default function Obj25({ x, y, z }) {

    var g4 = new THREE.BoxGeometry(9,9,1);
    var m4 = new THREE.MeshBasicMaterial({
        color: 0x4D3E15, side: THREE.DoubleSide
    });
    var mesh04 = new THREE.Mesh(g4,m4);
    mesh04.castShadow = true; // No generará sombra real porque es BasicMaterial
    mesh04.position.set(15,5,10);

    var g5 = new THREE.BoxGeometry(7,7,.5);
    var m5 = new THREE.MeshLambertMaterial({
        color: 0x5ACEE0, transparent: true, opacity: 0.3
    });
    var mesh05 = new THREE.Mesh(g5,m5);
    mesh05.castShadow = true;
    mesh05.position.set(15,5,10.5);

    var g6 = new THREE.PlaneGeometry(7,7);
    var t6 = new THREE.TextureLoader().load('./Images/Ft3.jpeg');
    var m6 = new THREE.MeshLambertMaterial({ map:t6 });
    var mesh06 = new THREE.Mesh(g6,m6);
    mesh06.castShadow = true;
    mesh06.position.set(15,5,10.7);

    var Fo2 = new THREE.Group();
    Fo2.add(mesh04, mesh05, mesh06);
    Fo2.position.set(x,y,z);
    return Fo2;

}

