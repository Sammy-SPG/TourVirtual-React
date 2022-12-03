import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Model from "../hooks/loadModel";
import '../styles/model.css';

export default function ModelContainer({nameModel}){
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 30);
    const modelGroup = new THREE.Group();
    const renderer = new THREE.WebGL1Renderer({alpha: true, powerPreference: 'high-performance', precision: 'lowp', animation: true});

    let currentRef, orbitControls;

    useEffect(()=>{
        currentRef = mountRef.current;
        creteScene();
        initRenderer(currentRef);
        animate();
        currentRef.appendChild(renderer.domElement);
    }, [])

    const creteScene = ()=>{
        const ambientLight = new THREE.AmbientLight(0xeeeeee, 0.8);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        camera.position.set(0, 0, 10)
        scene.add(ambientLight);
        scene.add(pointLight);
        scene.add(camera);
        importModel();
        initOrbit();
    }

    const importModel =()=>{
        if(nameModel === 'flowerVase'){
            const {ModelFlowerVase} = Model();
            ModelFlowerVase(modelGroup);
        }
        scene.add(modelGroup);
    }

    const initOrbit = ()=>{
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
    }

    const initRenderer = (currentRef)=>{
        const {clientWidth: width, clientHeight: height} = currentRef;
        renderer.setSize(width, height);
    }

    const animate = ()=>{
        orbitControls.autoRotate = true;
        orbitControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    return(
        <div className="container3d" ref={mountRef}>

        </div>
    )
}