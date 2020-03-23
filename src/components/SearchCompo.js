/**
 * @author:Imrane
 * Component SearchCompo
 */
import React,{Component} from 'react'; 

class SearchCompo extends Component{
    constructor(props){
        super(props);
    }

    handleFilterJeux= (event) =>{
      //console.log("FIlter jeu", event.target.value);
      this.props.handleFilterText(event.target.value);
    }

    handleFilterStocked= (event) =>{
      //console.log("FIlter jeu stock", event.target.checked);
      this.props.handleFilterDispo(event.target.checked);
    }

  render(){
    return (
      <div style={{"backgroundColor":"blue"}}>
        <input type="text" placeholder="Rechercher" text={this.props.filterText} onChange={this.handleFilterJeux}/>
        <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleFilterStocked}/>
        {" "} Instock
      </div>
    )
  }
}

export default SearchCompo;
