import card from '../Card/Card.components'
import './card-list.components'

const CardList = (props) => {

    const {monsters} = props 
    return(
        <div className ='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <card key={index} monster={monster} />
                    )
                )
            }

        </div>
    )
}

export default CardList