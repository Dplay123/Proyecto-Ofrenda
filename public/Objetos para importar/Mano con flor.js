    import * as THREE from '../js/three.module.js';
    import { RoundedBoxGeometry } from '../js/RoundedBoxGeometry.js';
    export default function Obj03 ({x,y,z}){


// Espacio para colocar los objetos
    
    
    //Brazo
    var g2 = new RoundedBoxGeometry(2,12,2,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh18 = new THREE.Mesh(g2,m2);
    //scene.add(mesh18);
    mesh18.position.set(-2,-5.3,4);
    mesh18.rotation.set(-0.35,0.785,0);
    mesh18.castShadow = true;

    var g2 = new RoundedBoxGeometry(3,12,2.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh19 = new THREE.Mesh(g2,m2);
    //scene.add(mesh19);
    mesh19.position.set(1.5,-5.5,4);
    mesh19.rotation.set(-0.35,0,0);
    mesh19.castShadow = true;

    var g2 = new RoundedBoxGeometry(3.5,7,3,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh20 = new THREE.Mesh(g2,m2);
    //scene.add(mesh20);
    mesh20.position.set(0,0,2);
    mesh20.rotation.set(1.57,0.10,1.77);
    mesh20.castShadow = true;

    var g2 = new RoundedBoxGeometry(2,12,2,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh02 = new THREE.Mesh(g2,m2);
    //scene.add(mesh02);
    mesh02.position.set(-2,5.3,2);
    mesh02.castShadow = true;

    var g2 = new RoundedBoxGeometry(3,12,2.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh03 = new THREE.Mesh(g2,m2);
    //scene.add(mesh03);
    mesh03.position.set(1.5,6.5,2);
    mesh03.rotation.set(0,-0.785,0);
    mesh03.castShadow = true;

    var g2 = new RoundedBoxGeometry(4.5,7,3,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh04 = new THREE.Mesh(g2,m2);
    //scene.add(mesh04);
    mesh04.position.set(0,11.5,2);
    mesh04.rotation.set(1.57,0.10,1.57);
    mesh04.castShadow = true;

    var g2 = new RoundedBoxGeometry(3,3,2.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh05 = new THREE.Mesh(g2,m2);
    //scene.add(mesh05);
    mesh05.position.set(-4,12.5,3);
    mesh05.rotation.set(1.57,0.78,1.57);
    mesh05.castShadow = true;

    var g2 = new RoundedBoxGeometry(4,5,2.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh06 = new THREE.Mesh(g2,m2);
    //scene.add(mesh06);
    mesh06.position.set(-2,13.5,2);
    mesh06.rotation.set(1.57,-0.35,1.57);
    mesh06.castShadow = true;

    var g2 = new RoundedBoxGeometry(4,5,2.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh07 = new THREE.Mesh(g2,m2);
    //scene.add(mesh07);
    mesh07.position.set(2,13.5,2);
    mesh07.rotation.set(1.57,0.35,1.57);
    mesh07.castShadow = true;

    //dedos
    var g2 = new RoundedBoxGeometry(1.5,7,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh08 = new THREE.Mesh(g2,m2);
    //scene.add(mesh08);
    mesh08.position.set(3.5,16.5,0);
    mesh08.rotation.set(-0.785,0,-0.39);
    mesh08.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,9,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh09 = new THREE.Mesh(g2,m2);
    //scene.add(mesh09);
    mesh09.position.set(1,16.5,0);
    mesh09.rotation.set(-0.655,0,-0.1);
    mesh09.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,11,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh10 = new THREE.Mesh(g2,m2);
    //scene.add(mesh10);
    mesh10.position.set(-.7,17.5,1);
    mesh10.rotation.set(-0.47,0,0);
    mesh10.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,8,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh11 = new THREE.Mesh(g2,m2);
    //scene.add(mesh11);
    mesh11.position.set(-3,16.5,2);
    mesh11.rotation.set(-0.32,0,0.21);
    mesh11.castShadow = true;

    //

    var g2 = new RoundedBoxGeometry(1.5,5,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh12 = new THREE.Mesh(g2,m2);
    //scene.add(mesh12);
    mesh12.position.set(5,20.2,-2.3);
    mesh12.rotation.set(-0.32,0,-0.26);
    mesh12.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,5.5,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh13 = new THREE.Mesh(g2,m2);
    //scene.add(mesh13);
    mesh13.position.set(1.5,22,-3);
    mesh13.rotation.set(-0.32,0,-0.05);
    mesh13.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,6,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh14 = new THREE.Mesh(g2,m2);
    //scene.add(mesh14);
    mesh14.position.set(-.7,24.2,-.7);
    mesh14.rotation.set(0.22,0,0);
    mesh14.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,4.5,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh15 = new THREE.Mesh(g2,m2);
    //scene.add(mesh15);
    mesh15.position.set(-3.8,21.7,1.6);
    mesh15.rotation.set(0.32,0,0);
    mesh15.castShadow = true;

    //

    var g2 = new RoundedBoxGeometry(1.5,5,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh16 = new THREE.Mesh(g2,m2);
    //scene.add(mesh16);
    mesh16.position.set(-5,14,5);
    mesh16.rotation.set(0,1,0.785);
    mesh16.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,4.2,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh17 = new THREE.Mesh(g2,m2);
    //scene.add(mesh17);
    mesh17.position.set(-5,16.5,7);
    mesh17.rotation.set(0,-.285,-0.785);
    mesh17.castShadow = true;

    //

    var g2 = new RoundedBoxGeometry(1.5,4,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide
    });
    var mesh21 = new THREE.Mesh(g2,m2);
    //scene.add(mesh21);
    mesh21.position.set(-2.6,18.6,6.7); 
    mesh21.rotation.set(-0.585,0,-0.785);
    mesh21.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,4,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide
    });
    var mesh22 = new THREE.Mesh(g2,m2);
    //scene.add(mesh22);
    mesh22.position.set(-3.53,24.9,3.5); 
    mesh22.rotation.set(0.725,0,-0.13);
    mesh22.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,4.8,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide
    });
    var mesh23 = new THREE.Mesh(g2,m2);
    //scene.add(mesh23);
    mesh23.position.set(-.5,28.5,1.3); 
    mesh23.rotation.set(0.725,0,-0.13);
    mesh23.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,4.8,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide
    });
    var mesh23 = new THREE.Mesh(g2,m2);
    //scene.add(mesh23);
    mesh23.position.set(1.8,26,-2.85); 
    mesh23.rotation.set(0.325,0,-0.13);
    mesh23.castShadow = true;

    var g2 = new RoundedBoxGeometry(1.5,3.8,1.5,15,2);
    var m2 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide
    });
    var mesh24 = new THREE.Mesh(g2,m2);
    //scene.add(mesh24);
    mesh24.position.set(5.8,23.9,-2.7); 
    mesh24.rotation.set(0.125,0,-0.13);
    mesh24.castShadow = true;

    //Flor

    var g3 = new RoundedBoxGeometry(2,8,2,8,4);
    var m3 = new THREE.MeshLambertMaterial({
        color: 0xFF7B00, side: THREE.DoubleSide
    });
    var mesh25 = new THREE.Mesh(g3,m3);
    //scene.add(mesh25);
    mesh25.position.set(0,22,4);
    mesh25.castShadow = true;

    var mesh26 = new THREE.Mesh(g3,m3);
    //scene.add(mesh26);
    mesh26.rotation.set(0,0,0.785);
    mesh26.position.set(0,22,4);
    mesh26.castShadow = true;
    
    var mesh27 = new THREE.Mesh(g3,m3);
    //scene.add(mesh27);
    mesh27.rotation.set(0,0,1.57);
    mesh27.position.set(0,22,4);
    mesh27.castShadow = true;

    var mesh28 = new THREE.Mesh(g3,m3);
    //scene.add(mesh28);
    mesh28.rotation.set(0,0,2.36);
    mesh28.position.set(0,22,4);
    mesh28.castShadow = true;

    var mesh29 = new THREE.Mesh(g3,m3);
    //scene.add(mesh29);
    mesh29.rotation.set(0,0.785,0.785);
    mesh29.position.set(0,22,4);
    mesh29.castShadow = true;
    
    var mesh30 = new THREE.Mesh(g3,m3);
    //scene.add(mesh30);
    mesh30.rotation.set(0,0.785,1.57);
    mesh30.position.set(0,22,4);
    mesh30.castShadow = true;

    var mesh31 = new THREE.Mesh(g3,m3);
    //scene.add(mesh31);
    mesh31.rotation.set(0,0.785,2.36);
    mesh31.position.set(0,22,4);
    mesh31.castShadow = true;

    var mesh32 = new THREE.Mesh(g3,m3);
    //scene.add(mesh32);
    mesh32.rotation.set(0,-0.785,0.785);
    mesh32.position.set(0,22,4);
    
    var mesh33 = new THREE.Mesh(g3,m3);
    //scene.add(mesh33);
    mesh33.rotation.set(0,-0.785,1.57);
    mesh33.position.set(0,22,4);
    mesh33.castShadow = true;

    var mesh34 = new THREE.Mesh(g3,m3);
    //scene.add(mesh34);
    mesh34.rotation.set(0,-0.785,2.36);
    mesh34.position.set(0,22,4);
    mesh34.castShadow = true;

    var mesh35 = new THREE.Mesh(g3,m3);
    //scene.add(mesh35);
    mesh35.rotation.set(0,1.57,0.785);
    mesh35.position.set(0,22,4);
    mesh35.castShadow = true;
    
    var mesh36 = new THREE.Mesh(g3,m3);
    //scene.add(mesh36);
    mesh36.rotation.set(0,1.57,1.57);
    mesh36.position.set(0,22,4);
    mesh36.castShadow = true;

    var mesh37 = new THREE.Mesh(g3,m3);
    //scene.add(mesh37);
    mesh37.rotation.set(0,1.57,2.36);
    mesh37.position.set(0,22,4);
    mesh37.castShadow = true;

    var Mano = new THREE.Group();
        Mano.add(mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, 
            mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, 
            mesh21, mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29, mesh30, 
            mesh31, mesh32, mesh33, mesh34, mesh35, mesh36, mesh37);
        Mano.position.set(x,y,z);
        return Mano;
    }