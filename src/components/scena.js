import React from 'react';
import { Pannellum } from 'pannellum-react';
import image from '../images/PanoramaInterior.png';

export default function Scene(){

    return(
        <>
            <Pannellum 
                width = '100%'
                height = '100vh'
                image = {image}
                pitch = {10}
                yaw = {180}
                hfov = {110}
                autoLoad
                showZoomCtrl = {false}
                showFullscreenCtrl = {false}
            >
                <Pannellum.Hotspot type = 'custom' pitch = {31} yaw = {150} handleClick = {()=>console.log('Hola mundo')}/>

            </Pannellum>

        </>
    );
}