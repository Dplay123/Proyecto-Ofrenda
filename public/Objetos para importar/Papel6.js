    import * as THREE from '../js/three.module.js';
    export default function Obj09 ({x,y,z}){

    //6

    var g7 = new THREE.PlaneGeometry(6,7);
    var t7= new THREE.TextureLoader().load('./Images/P7.png');
    var m7 = new THREE.MeshLambertMaterial({map:t7, transparent:true});
    var mesh07 = new THREE.Mesh(g7,m7);
    //scene.add(mesh07);
    mesh07.position.set(9,0,-3);
    
    var Papel6 = new THREE.Group();
    Papel6.add(mesh07);
    Papel6.position.set(x,y,z);
    return Papel6;
    
}