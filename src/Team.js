import anaben from './ANABEN.png';
import doc from './DOC.jpg';
import michael from './MICHAEL.png';
import toxin from './TOXIN.png';
import './Team.css';

function Team(){
return (
    <div className="Team">
        <div className='thead'>
            Team
        </div>
        
       <table >
        <tr>
            <th ><div className='timage'><img src={anaben}/></div> <div className='team1'>
        ANABEN <br/>
        CO-FOUNDER
        </div></th>
            <th ><div className='timage'><img src={doc}/></div><div className='team2'>
       
       DOC HOFFMAN<br/>
       CEO
       </div></th>
            <th ><div className='timage'><img src={michael}/></div> <div className='team3'>
        
        MICHAEL<br/>
        MAIN DEVELOPER
        </div></th>
            <th ><div className='timage'><img src={toxin}/></div><div className='team4'>
      
      T◎XIN<br/>
      FOUNDER
      </div></th>
        </tr>
       </table>
       
    </div>
)
}
export default Team;