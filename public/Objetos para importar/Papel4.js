    import * as THREE from '../js/three.module.js';
    export default function Obj07 ({x,y,z}){

    //4

    var g5 = new THREE.PlaneGeometry(6,7);
    var t5= new THREE.TextureLoader().load('./Images/P4.png');
    var m5 = new THREE.MeshLambertMaterial({map:t5, transparent:true});
    var mesh05 = new THREE.Mesh(g5,m5);
    //scene.add(mesh05);
    mesh05.position.set(9,0,3); 
    
    var Papel4 = new THREE.Group();
    Papel4.add(mesh05);
    Papel4.position.set(x,y,z);
    return Papel4;
    
}