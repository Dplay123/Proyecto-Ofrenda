    import * as THREE from '../js/three.module.js';
    export default function Obj04 ({x,y,z}){

   //2

    var g3 = new THREE.PlaneGeometry(6,7);
    var t3= new THREE.TextureLoader().load('./Images/P10.png');
    var m3 = new THREE.MeshLambertMaterial({map:t3, transparent:true});
    var mesh03 = new THREE.Mesh(g3,m3);
    //scene.add(mesh03);
    mesh03.position.set(0,0,3); 

    
    var Papel2 = new THREE.Group();
    Papel2.add(mesh03);
    Papel2.position.set(x,y,z);
    return Papel2;
    
}