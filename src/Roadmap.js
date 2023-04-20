import React from 'react';
import RoadMap from './roadmap.JPG';
import './Roadmap.css';

function Roadmap(){
    return(
        <div className='RoadMap'>
            
            <div className='rhead'>
               ROADMAP
            </div>
         
            <img className='rimage' src={RoadMap}></img>          
            <a target="_blank"href="https://the-symbiotes.gitbook.io/roadmap/" className='roadspan'>Roadmap FAQ</a>
        </div>
    );
}
export default Roadmap;