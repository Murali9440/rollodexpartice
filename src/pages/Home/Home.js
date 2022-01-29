import React  from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import search from '../../components/search/search.components';

class Home extends React.Component{
    constructor(){
        super();
        this.setState = {
            monsters = [],
            searchField : ``
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
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().include(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters rollodex</h1>

                <search handleSearch ={this.handleSearch} />
                <CardList monsters = {filteredMonsters} />

            </div>
            </>
        )
    }

}