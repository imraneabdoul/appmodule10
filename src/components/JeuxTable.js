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

    removeDuplicates = (colors) =>{
      let unique = {};
      colors.forEach(function(i) {
        if(!unique[i]) {
          unique[i] = true;
        }
      });
      return Object.keys(unique);
    }


  render(){
        const filterText = this.props.filterText;
        const inStock = this.props.inStockOnly;
        const rows = [];
        const allCategories = [];
        this.props.jeux.forEach(element => {
          allCategories.push(element.category);
        });

        const mesCategories = this.removeDuplicates(allCategories)

        for(let j =0;j<mesCategories.length;j++){
          rows.push(<JeuxCategory key={"jeuxcatego"+j} categorie={mesCategories[j]}/>);

          this.props.jeux.forEach(element => {
            if(element.category == mesCategories[j]){
              if(element.name.indexOf(filterText) == -1){
                    return;
                }
                if(inStock && !element.stocked){
                    return;
                }
                  rows.push(<JeuxRow key={element.name} name={element.name} price={element.price} stock={element.stocked}/>);
            }
          });

        }
      
    return (
      <table style={{"backgroundColor":"green"}}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        {rows}
      </table>
    )
  }
}

export default JeuxTable;
