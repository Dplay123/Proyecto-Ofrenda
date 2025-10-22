    import * as THREE from '../js/three.module.js';
    export default function Obj03 ({x,y,z}){

    //1

    var g2 = new THREE.PlaneGeometry(6,7);
    var t2= new THREE.TextureLoader().load('./Images/P11.png');
    var m2 = new THREE.MeshLambertMaterial({map:t2, transparent:true});
    var mesh02 = new THREE.Mesh(g2,m2);
    //scene.add(mesh02);
    mesh02.position.set(0,0,0); 
    
    var Papel1 = new THREE.Group();
    Papel1.add(mesh02);
    Papel1.position.set(x,y,z);
    return Papel1;
    
}