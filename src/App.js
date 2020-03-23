import React from 'react'; 
import './App.css';
import FilterableJeuxTable from "./components/FilterableJeuxTable"
class App extends React.Component{

  render(){
    const Jeux=[];
    Jeux.push({category:"FPS",name:"CounterStrike",price:"10e",stocked:true});
    Jeux.push({category:"FPS",name:"BattleField",price:"30e",stocked:true});
    Jeux.push({category:"FPS",name:"War",price:"20e",stocked:false});

    Jeux.push({category:"Adventure",name:"Tomb rider",price:"60e",stocked:true});
    Jeux.push({category:"Adventure",name:"Uncharted",price:"25e",stocked:false});
    Jeux.push({category:"Adventure",name:"Zelda",price:"20e",stocked:true});

    Jeux.push({category:"Film",name:"L'attaque des titans",price:"10e",stocked:true});
    Jeux.push({category:"Film",name:"Troi",price:"30e",stocked:true});
    Jeux.push({category:"Film",name:"Narcos",price:"20e",stocked:false});

    Jeux.push({category:"Manga",name:"Naruto",price:"60e",stocked:true});
    Jeux.push({category:"Manga",name:"Onepiece",price:"25e",stocked:false});
    Jeux.push({category:"Manga",name:"DBZ",price:"20e",stocked:true});

    return (
      <div className="App">
        <FilterableJeuxTable jeux={Jeux}/>
      </div>
    )
  }
}

export default App;
