import React from 'react'; 
import './App.css';
import FilterableJeuxTable from "./components/FilterableJeuxTable"
class App extends React.Component{

  render(){
    const Jeux= [];
    Jeux.push({category:'FPS',price:'10e','stocked':true,name:'Counter Strike'});
    Jeux.push({category:'FPS',price:'40e','stocked':true,name:'BattleField'});
    Jeux.push({category:'FPS',price:'30e','stocked':false,name:'PUBG'});

    Jeux.push({category:'Aventure',price:'10e','stocked':false,name:'Tom Rider'});
    Jeux.push({category:'Aventure',price:'40e','stocked':true,name:'Uncharted'});
    Jeux.push({category:'Aventure ',price:'30e','stocked':false,name:'Zelda'});


    return (
      <div className="App">
        <FilterableJeuxTable jeux={Jeux}/>
      </div>
    )
  }
}

export default App;
