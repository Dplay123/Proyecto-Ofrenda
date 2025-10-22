import * as THREE from '../js/three.module.js';

export default function Obj24({ x, y, z }) {

    var g1 = new THREE.BoxGeometry(8,12,1);
    var m1 = new THREE.MeshBasicMaterial({
        color: 0x4D3E15, side: THREE.DoubleSide
    });
    var mesh01 = new THREE.Mesh(g1,m1);
    mesh01.castShadow = true; // No generará sombra real porque es BasicMaterial
    mesh01.position.set(0,5,10);

    var g2 = new THREE.BoxGeometry(6,10,.5);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0x5ACEE0, transparent: true, opacity: 0.3
    });
    var mesh02 = new THREE.Mesh(g2,m2);
    mesh02.castShadow = true;
    mesh02.position.set(0,5,10.5);

    var g3 = new THREE.PlaneGeometry(6,10);
    var t3 = new THREE.TextureLoader().load('./Images/Ft1.jpeg');
    var m3 = new THREE.MeshLambertMaterial({ map:t3 });
    var mesh03 = new THREE.Mesh(g3,m3);
    mesh03.castShadow = true;
    mesh03.position.set(0,5,10.7);

    var Fo1 = new THREE.Group();
    Fo1.add(mesh01, mesh02, mesh03);
    Fo1.position.set(x,y,z);
    return Fo1;

}

