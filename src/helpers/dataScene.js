import insideOne from '../images/PanoramaInterior.png';
import insideTwo from '../images/PanoramaInterior2.png';

const Scenes = {
    insideOne:{
        title:'interior 1',
        image: insideOne,
        pitch: -11,
        yaw: -3,
        hotSpot:{
            flowerVase:{
                type: 'custom',
                pitch: -16.28,
                yaw: -1.66,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },
            plane:{
                type: 'custom',
                pitch: -34,
                yaw: -14,
                cssClass: 'hotSpotElement',           
            },
            chair:{
                type: 'custom',
                pitch: -28,
                yaw: -64,
                cssClass: 'hotSpotElement',
            },
            nexScene:{
                type: 'custom',
                pitch: -8,
                yaw: 126,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
        }
    },
    insideTwo:{
        title:'interior 2',
        image: insideTwo,
        pitch: 10,
        yaw: 180,
        hotSpot:{

        }
    }
}

export default Scenes;