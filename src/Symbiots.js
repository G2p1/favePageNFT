import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import s4 from './s4.png';
import s5 from './s5.png';
import './Symbiots.css';
function Symbiots(){
  
    return(
        <div className='symbiots'>
            <div className='shead'>
                SYMBIOTES
            </div>
                <div className='container'>
                    <div className='t1' >
                        <img  src={s1}/>
                        <span>Immortus</span>
                    </div>
                    <div className='t2'>
                        <img  src={s2}/>
                        
                        <span>Stellaros</span>
                    </div>
                    <div className='t3'>
                        <img  src={s3}/>
                        
                        <span >Quanticor</span>
                    </div>
                    <div className='t4'>
                        <img  src={s4}/>
                        
                        <span >Darkflame</span>
                    </div>
                    <div className='t5'>
                        <img  src={s5}/>
                        
                        <span>Noxus</span>
                    </div>
                </div>
        </div>
    );
}
export default Symbiots;