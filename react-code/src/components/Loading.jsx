import React from 'react';
import {useState, useRef, useEffect} from 'react';
import './Loading.css';

import silentHill from '../assets/covers/silent-hill-2.png';
import devilMayCry from '../assets/covers/devil-may-cry-5.png';
import metalGear from '../assets/covers/metal-gear-solid-2.jpg';
import personaFour from '../assets/covers/persona-4.png';
import residentEvil from '../assets/covers/resident-evil-4.png'; /* needed imports */
import jackpotImg from '../assets/jackpot.jpg';

// asset list, fair bit here, though stripping it down to primary/first seen things
const neededAssets = [
    {type: 'image', src: devilMayCry},
    {type: 'image', src: residentEvil},
    {type: 'image', src: silentHill},
    {type: 'image', src: personaFour},
    {type: 'image', src: metalGear},
    {type: 'image', src: jackpotImg},
    {type: 'font', family: 'FOT-Skip'},
    {type: 'font', family: 'Hiragino Mincho'},
    {type: 'font', family: 'LEMON-MILK-MEDIUM'},
    {type: 'font', family: 'BM Space'},
    {type: 'font', family: 'Barlow Regular'},
    {type: 'font', family: 'Novecento Light'}
];



// makes an asterisk with a certain classname
function CreateAsterisk({className}) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <line x1="12" y1="2" x2="12" y2="22" /> 
      <line x1="2" y1="12" x2="22" y2="12" />
      
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );
}

function Loading ({onFinish}){
    const [progress, setProgress] = useState(0); // loading progress and status
    const [assetsReady, setAssetsReady] = useState(false); // are all the assets ready
    const [currentStep, setCurrentStep] = useState(0); // used in conjunction with the loading animation
    const loadedAssets = useRef(0); // loaded assets

    const [fadeOut, setFadeout] = useState(false); // determines when to fade out the load screen

    function handleLoadedAssets(){
        loadedAssets.current += 1; // increment based on loaded elements
        console.log(`Asset ${loadedAssets.current}/${neededAssets.length} loaded`);

        const currentProgress = (loadedAssets.current/neededAssets.length) // loading percentage

        if (loadedAssets.current >= neededAssets.length) {
            setAssetsReady(true); // all assets are loaded
        }
    }

    function loadAsset(asset, isActive){
        if(asset.type === 'image'){
            const img = new Image();
            img.onload = () => { if (isActive()) handleLoadedAssets(); };
            img.onerror = () => { if (isActive()) handleLoadedAssets(); };
            img.src = asset.src; 
        }
        else if (asset.type === 'font'){
            document.fonts.load(`1em "${asset.family}"`)
                .then(() => { if (isActive()) handleLoadedAssets(); })
                .catch(() => { if (isActive()) handleLoadedAssets(); });
        }
    }

    // 1. load all the assets
    useEffect(() => {
        let cancelled = false;
        neededAssets.forEach((currentItem) => {
            loadAsset(currentItem, () => !cancelled);
        });

        return () => {
            cancelled = true;
        };
    }, []);

    // 2. Run the "fake" loading screen
    useEffect(() => {
        const duration = 4000; // duration of the load screen
        const indicators = 5;
        const indivDuration = duration/indicators; // delay of each indicator

        const timer = setInterval(() => {
            setCurrentStep((prevStep) => { // set step counter
                const nextStep = prevStep + 1;

                // Once we hit the 5th step, shut off the loop
                if (nextStep >= indicators) {
                    clearInterval(timer);
                }

                return nextStep;
            });
        }, indivDuration);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // 3. Trigger completion and fading of the load screen
    useEffect(() => {
        // need both properties to be true
        if (currentStep >= 5 && assetsReady) {
            setFadeout(true); // begin fading sequence

            const finishTimer = setTimeout(() => {
                if (onFinish) onFinish();
            }, 2000);

            return () => clearTimeout(finishTimer);
        }
    }, [currentStep, assetsReady, onFinish]);

    // the actual HTML to return
    return( 
        <div className = {"load-container"}>
            <span className = {`load-indicators ${currentStep >= 1 ? 'active' : ''}`}>
                <span className = {`load-indicator-wrapper ${currentStep >= 1 ? 'active' : ''}`}>
                    <CreateAsterisk className = {`load-indicator ${fadeOut ? 'stopped' : ''}`} />
                </span>
                <span className = {`load-indicator-wrapper ${currentStep >= 2 ? 'active' : ''}`}>
                    <CreateAsterisk className = {`load-indicator ${fadeOut ? 'stopped' : ''}`} />
                </span>
                <span className = {`load-indicator-wrapper ${currentStep >= 3 ? 'active' : ''}`}>
                    <CreateAsterisk className = {`load-indicator ${fadeOut ? 'stopped' : ''}`} />
                </span>
                <span className = {`load-indicator-wrapper ${currentStep >= 4 ? 'active' : ''}`}>
                    <CreateAsterisk className = {`load-indicator ${fadeOut ? 'stopped' : ''}`} />
                </span>
                <span className = {`load-indicator-wrapper ${currentStep >= 5 ? 'active' : ''}`}>
                    <CreateAsterisk className = {`load-indicator ${fadeOut ? 'stopped' : ''}`} />
                </span>
            </span>
            <span className = "okay-sign"></span>
        </div>
    );
}

export default Loading;