import React  from 'react'
import Cardlist from '../../components/Card-list/Card-list.components';
import Search from '../../components/Search/Search.components';
import './Home.style.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users =>this.setState({monsters :users}));
    }
    
    handleSearch = (event) => {
        this.setState({searchField:event.target.value})
    }

    render(){
        const{monsters,searchField} = this.state
       const filteredMonsters = monsters.filter((monster) =>monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters rollodex</h1>

                <Search handleSearch ={this.handleSearch} />
                <Cardlist monsters = {filteredMonsters} />

            </div>
            </>
        )
    }

}

export default Home