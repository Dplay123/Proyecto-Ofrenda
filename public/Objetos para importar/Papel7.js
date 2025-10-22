    import * as THREE from '../js/three.module.js';
    export default function Obj10 ({x,y,z}){

    //7

    var g8 = new THREE.PlaneGeometry(6,7);
    var t8= new THREE.TextureLoader().load('./Images/P8.png');
    var m8 = new THREE.MeshLambertMaterial({map:t8, transparent:true});
    var mesh08 = new THREE.Mesh(g8,m8);
    //scene.add(mesh08);
    mesh08.position.set(0,0,-3); 
    
    var Papel7 = new THREE.Group();
    Papel7.add(mesh08);
    Papel7.position.set(x,y,z);
    return Papel7;
    
}