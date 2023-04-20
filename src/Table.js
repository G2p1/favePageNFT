import table1 from './table1.jpg';
import table2 from './table2.jpg';
import table3 from './table3.jpg';
import './Table.css'

function Table(){
 return(
    <div className='table'>
        <table>
            <tr>
                <th className='thimage'><img className='thimagel' src={table1}/></th>
                <th className='thtext'><div className='thtexthead1'>Lore</div><div className='thtext1'>Lore about symbiotes will continue as the project develops. What will be the next? </div> <a target="_blank" className='allchapter' href="https://the-symbiotes.gitbook.io/lore/">All chapter</a></th>
            </tr>
           </table>
        
        
           <table>
            <tr>
                <th className='thtext'> <div className='thtexthead2'>Laboratory</div><div className='thtext2'>Our platform will be simple and unique for all users of the NFT space!
The Laboratory will allow you to have all the resources and tools in one convenient place. </div></th>
                <th className='thimage'><img className='thimager' src={table2}/></th>
            </tr>
           </table>
    
       
            <table>
             <tr>
                   <th className='thimage'><img className='thimagel' src={table3}/></th>
                   <th className='thtext'><div className='thtexthead3'> The Symbiotes Infection</div><div className='thtext3'>Infection of other collection  with the Symbiotes!
Our partnership will be in the form of merging of art and utilities. </div></th>
                </tr>
                </table>
        
    </div>
 ); 
}

export default Table;