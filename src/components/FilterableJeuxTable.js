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
        this.state={
          filterText:"",
          inStockOnly: false
        };
    }

  handleFilterText = (val) =>{
      this.setState({ filterText : val});

  }

  handleFilterDispo = (val) =>{
    this.setState({inStockOnly:val});
}
    
  render(){
    return (
      <div style={{"backgroundColor":"red"}}>
        <SearchCompo 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
          handleFilterText={this.handleFilterText}
          handleFilterDispo={this.handleFilterDispo}
        />
        <JeuxTable 
          jeux={this.props.jeux}
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableJeuxTable;
