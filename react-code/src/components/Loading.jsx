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
    const [status, setStatus] = useState('loading');
    const loadedAssets = useRef(0); // loaded assets

    function handleLoadedAssets(){
        loadedAssets.current += 1; // increment based on loaded elements
        console.log(`Asset ${loadedAssets.current}/${neededAssets.length} loaded`);
        
        const currentProgress = (loadedAssets.current/neededAssets.length) // loading percentage

        setTimeout(() => {
            setProgress(currentProgress * 100); // convert to percentage
            if (loadedAssets.current >= neededAssets.length) {
                console.log('All assets loaded, waiting to call onFinish...');
                setTimeout(() => onFinish(), 1500); // allow 1500 ms delay when done loading
            }
        }, loadedAssets.current * 250); // force time delay when loading
    }

    function loadAsset(asset){
        // just loading in each asset
        if(asset.type === 'image'){
            const img = new Image();
            img.onload = () => handleLoadedAssets();
            img.onerror = () => handleLoadedAssets(); // in case of an error
            img.src = asset.src; 
        }
        else if (asset.type === 'font'){
            document.fonts.load(`1em "${asset.family}"`)
            .then(() => handleLoadedAssets())
            .catch(() => handleLoadedAssets()); // catch an error
        }
    }
    
    // loop through the array and load each item
    useEffect(() => { // nest inside useEffect so it only runs once
        neededAssets.forEach((currentItem) => {
            loadAsset(currentItem);
        });
    }, []);


    // the actual HTML to return
    return( 
        <div className = {"load-container"}>
            <span className = {`load-indicators ${progress >= 20 ? 'active' : ''}`}>
                <CreateAsterisk className={`load-indicator ${progress >= 20 ? 'active' : ''}`}/>
                <CreateAsterisk className={`load-indicator ${progress >= 40 ? 'active' : ''}`}/>
                <CreateAsterisk className={`load-indicator ${progress >= 60 ? 'active' : ''}`}/>
                <CreateAsterisk className={`load-indicator ${progress >= 80 ? 'active' : ''}`}/>
                <CreateAsterisk className={`load-indicator ${progress >= 100 ? 'active' : ''}`}/>
            </span>
            <span className = "okay-sign"></span>
        </div>
    );
}

export default Loading;