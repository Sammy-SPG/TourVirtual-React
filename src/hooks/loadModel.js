import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model(){

    const ModelFlowerVase = (scene) =>{
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./flower_vase/scene.gltf', (model)=>{
            console.log('Modelo cargado');
            scene.add(model.scene);
        }, (progreess)=>{
            console.log('Loading model');
        }, (err)=>{
            console.log('Error al cargar el modelo');
        })
    }

    return {ModelFlowerVase}

}