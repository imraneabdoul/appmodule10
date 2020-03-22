/**
 * @author:Imrane
 * Component JeuxTable
 */
import React,{Component} from 'react'; 
import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuxRow";

class JeuxTable extends Component{
    constructor(props){
        super(props);
    }
  render(){
      const rows = [];
      const categories = [];
      this.props.jeux.forEach(jeu => {
          rows.push(<JeuxRow key={jeu.name} jeu={jeu.name} price={jeu.price} stocked={jeu.stocked} />);
          categories.push(jeu.category);
      });
      
    return (
      <div style={{"backgroundColor":"green"}}>
        <table>
            <thead>
            <JeuxCategory category="Test"/>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            {rows /* bouclé automatiquement */} 
            {categories}
        </table>
        
      </div>
    )
  }
}

export default JeuxTable;
