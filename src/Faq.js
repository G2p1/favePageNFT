
import './Faq.css';

const Faq = ({title, active, setActive, text}) => {
        return(
        <div className='ffaq'>
            
            
                <div className="accordionHeading">
                    <div className="container" onClick={() => (active === title ? title="" : setActive(title))}>
                        <p >{title}</p>
                        
                    </div>
                </div>

            <div className={(active === title ? "show" : "") + "accordionContent"}>
                <div className="container">
                    <p className='tttt'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Faq;