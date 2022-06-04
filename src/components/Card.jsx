import {SedansBtn} from '../styles/stylecomponents/style';
import {SuvsBtn} from '../styles/stylecomponents/style';
import {LuxuryBtn} from '../styles/stylecomponents/style';

const Card = ({name, text}) => {
    let bg;
    switch(name) {
        case 'sedans':
            bg = 'card-bg-sedans'
            break;
        case 'suvs':
            bg = 'card-bg-suvs'
            break
        case 'luxury':
            bg = 'card-bg-luxary'
            break
        default:
            bg = '';
            break
    }
    return ( 
        <div className={`card-container ${bg}`}>
            <div className="card-head">
                <img src={require(`../images/icon-${name}.svg`)} alt='card icon'/>
            </div>
            <div className="card-body">
                <h1 className='card-title'>{name}</h1>
                <p className='card-description'> 
                    {text}
                </p>
            </div>
            <div className="card-footer">
                { name ==='sedans' && <SedansBtn>Learn More</SedansBtn>}
                { name ==='suvs' && <SuvsBtn>Learn More</SuvsBtn>}
                { name ==='luxury' && <LuxuryBtn>Learn More</LuxuryBtn>}
            </div>
        </div>
     );
}
 
export default Card;