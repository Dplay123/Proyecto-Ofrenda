    import * as THREE from '../js/three.module.js';
    export default function Obj08 ({x,y,z}){

    //5

    var g6 = new THREE.PlaneGeometry(6,7);
    var t6= new THREE.TextureLoader().load('./Images/P12.png');
    var m6 = new THREE.MeshLambertMaterial({map:t6, transparent:true});
    var mesh06 = new THREE.Mesh(g6,m6);
    //scene.add(mesh06);
    mesh06.position.set(-9,0,3); 
    
    var Papel5 = new THREE.Group();
    Papel5.add(mesh06);
    Papel5.position.set(x,y,z);
    return Papel5;
    
}