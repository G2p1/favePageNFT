import React, {useState} from "react";
import logo from './logot.png';
import discord from './discord.png';
import baner from './firstimg.gif';
import rsi from './dnk.png';
import twitter from './twitter.png';
import './App.css';
import Roadmap from './Roadmap.js';
import Team from './Team.js';
import Table from './Table.js';
import Faq from './Faq.js';
import Symbiots from "./Symbiots.js";

function App() {
  const [active, setActive] = useState("");


  return (
    <div className="App" id="first">
      <nav className='nav'>
        <div className='logo'><a href="#first"><img src={logo}></img></a></div>
        <div className='mainref'><a  className='map' href='#roadmap'>ROADMAP </a><a href='#symbiots'className='rarity'>SYMBIOTES </a><a href='#team'className='teamnav'>Team </a><a className='faq' href='#faq'>FAQ </a> </div>
        <div  className='connect'><a target="_blank" href="https://discord.gg/34acXYByJP"><img  src={discord}></img> </a><a target="_blank" href="https://twitter.com/symbiotesNFTs"><img className="twit" src={twitter}/></a> </div>
      </nav>
      <div className='headimageapp'>
      <img  src={baner} width='100%'></img>
      <a  target="_blank" href="https://the-symbiotes.gitbook.io/lore/" className="banerlore"></a>
      
      <a   href="#team" className="banerteam"></a>
      
      <a   href="#roadmap" className="banerroadmap"></a>
      
      <a   href="#symbiots" className="banersymbiots"></a>

      <img className='rsi' src={rsi}></img>
      </div>
      <div>
        <Table/>
      </div>
      <div id='roadmap'>
      <Roadmap />
      </div>
      <div id='symbiots'>
     <Symbiots/>
     </div>
      <div id="team">
        <Team/>
      </div>
      
      <div id="faq" className='fhead'>
                FAQ
            </div>
      
      <Faq title="What are The Symbiotes?" active={active} setActive={setActive} text="The Symbiotes is a new project built on the Solana blockchain. Our goal is to create a simple and very comfortable platform for NFT users, where all frequently used resources and tools will be collected for efficient work. An interesting lore about symbiotes will be created as our project develops. Moreover, we plan to accumulate partnerships and infect their collections."/>
      <Faq title="What is the mint price?" active={active} setActive={setActive} text="TBA"/>
      <Faq title="What is the supply?" active={active} setActive={setActive} text="TBA"/>
      <Faq title="When is the mint date?" active={active} setActive={setActive} text="March"/>

      <footer>
        <a  target="_blank" href="https://discord.gg/34acXYByJP" className="footerdiscord"><img src={discord}></img><span>Discord</span></a>
        <a target="_blank" href="https://twitter.com/symbiotesNFTs" className="footertwitter"><img src={twitter}></img><span>Twitter</span></a>
      </footer>
    </div>
  );
}

export default App;
