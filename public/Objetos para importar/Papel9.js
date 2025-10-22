    import * as THREE from '../js/three.module.js';
    export default function Obj12 ({x,y,z}){

    //9

    var g10 = new THREE.PlaneGeometry(6,7);
    var t10= new THREE.TextureLoader().load('./Images/P1.png');
    var m10 = new THREE.MeshLambertMaterial({map:t10, transparent:true});
    var mesh10 = new THREE.Mesh(g10,m10);
    //scene.add(mesh10);
    mesh10.position.set(-9,0,-3); 
    
    var Papel9 = new THREE.Group();
    Papel9.add(mesh10);
    Papel9.position.set(x,y,z);
    return Papel9;
    
}