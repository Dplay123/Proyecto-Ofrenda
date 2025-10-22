import * as THREE from '../js/three.module.js';

export default function Obj25({ x, y, z }) {

    var g7 = new THREE.BoxGeometry(9,10,1);
    var m7 = new THREE.MeshBasicMaterial({
        color: 0x4D3E15, side: THREE.DoubleSide
    });
    var mesh07 = new THREE.Mesh(g7,m7);
    mesh07.castShadow = true; // No proyectará sombra real porque es BasicMaterial
    mesh07.position.set(-15,5,10);

    var g8 = new THREE.BoxGeometry(7,8,.5);
    var m8 = new THREE.MeshLambertMaterial({
        color: 0x5ACEE0, transparent: true, opacity: 0.3
    });
    var mesh08 = new THREE.Mesh(g8,m8);
    mesh08.castShadow = true;
    mesh08.position.set(-15,5,10.5);

    var g9 = new THREE.PlaneGeometry(7,8);
    var t9 = new THREE.TextureLoader().load('./Images/Ft2.jpeg');
    var m9 = new THREE.MeshLambertMaterial({ map: t9 });
    var mesh09 = new THREE.Mesh(g9,m9);
    mesh09.castShadow = true;
    mesh09.position.set(-15,5,10.7);

    var Fo3 = new THREE.Group();
    Fo3.add(mesh07, mesh08, mesh09);
    Fo3.position.set(x,y,z);
    return Fo3;

}

