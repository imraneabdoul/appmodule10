/**
 * @author:Imrane
 * Component FilterJeu
 */
import React,{Component} from 'react'; 
import SearchCompo from "./SearchCompo";
import JeuxTable from "./JeuxTable";

class FilterableJeuxTable extends Component{
    constructor(props){
        super(props);
    }
    
  render(){
    return (
      <div style={{"backgroundColor":"red"}}>
        FilterableJeuxTable
        <SearchCompo/>
        <JeuxTable jeux={this.props.jeux}/>
      </div>
    )
  }
}

export default FilterableJeuxTable;
