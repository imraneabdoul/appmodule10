/**
 * @author:Imrane
 * Component SearchCompo
 */
import React,{Component} from 'react'; 

class SearchCompo extends Component{
    constructor(props){
        super(props);
    }

    handleFilterText = (event) =>{
        console.log(event.target.value);
    }

    handleFilterCheck = (event) =>{
        console.log(event.target.checked);
    }

  render(){
    return (
      <div style={{"backgroundColor":"blue"}}>
        <input type="text"
            placeholder="Search"
            onChange={this.handleFilterText}
        />
        <input type="checkbox"
            onChange={this.handleFilterCheck}
        />
        Produit en stock
      </div>
    )
  }
}

export default SearchCompo;
