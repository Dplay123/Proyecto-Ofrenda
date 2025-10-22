    import * as THREE from '../js/three.module.js';
    export default function Obj05 ({x,y,z}){

    //3

    var g4 = new THREE.PlaneGeometry(6,7);
    var t4= new THREE.TextureLoader().load('./Images/P3.png');
    var m4 = new THREE.MeshLambertMaterial({map:t4, transparent:true});
    var mesh04 = new THREE.Mesh(g4,m4);
    //scene.add(mesh04);
    mesh04.position.set(9,0,0);
    
    var Papel3 = new THREE.Group();
    Papel3.add(mesh04);
    Papel3.position.set(x,y,z);
    return Papel3;
    
}