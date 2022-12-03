import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import Modal from '../components/modal';
import dataScene from '../helpers/dataScene';
import { UseModal } from '../hooks/useModal';
import ModelContainer from './modelContainer';

export default function Scene() {
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene['insideOne']);
    const [model, setModel] = useState(null);

    const hotSpots = (element, i) => {
        if (element.cssClass === 'hotSpotElement')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={() => { openModal(); setModel(element.nameModel)}}
                    cssClass={element.cssClass}
                />
            );

        else if (element.cssClass === 'moveScene')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={() => { setScene(dataScene[element.scene]); }}
                    cssClass={element.cssClass}
                />
            );
    }

    return (
        <div>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={-16.28}
                yaw={-1.66}
                hfov={130}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
                hotspotDebug={true}
            >
                {Object.values(scene.hotSpot).map((element, i) => (hotSpots(element, i)))}
            </Pannellum>

            <Modal isOpen={isOpen} close={() => closeModal()}>
                {isOpen ? <ModelContainer  nameModel={model}/> : null}
            </Modal>
        </div>
    );
}