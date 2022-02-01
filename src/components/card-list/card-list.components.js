import Card from '../Card/Card.components';
import './Card-list.style.css'

const Cardlist = (props) => {


    const {monsters} = props 
    return(
        <div className ='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }

        </div>
    )
}

export default Cardlist