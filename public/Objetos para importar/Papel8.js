    import * as THREE from '../js/three.module.js';
    export default function Obj11 ({x,y,z}){

    //8

    var g9 = new THREE.PlaneGeometry(6,7);
    var t9= new THREE.TextureLoader().load('./Images/P2.png');
    var m9 = new THREE.MeshLambertMaterial({map:t9, transparent:true});
    var mesh09 = new THREE.Mesh(g9,m9);
    //scene.add(mesh09);
    mesh09.position.set(-9,0,0);
    
    var Papel8 = new THREE.Group();
    Papel8.add(mesh09);
    Papel8.position.set(x,y,z);
    return Papel8;
    
}