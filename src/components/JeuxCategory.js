/**
 * @author:Imrane
 * Component JeuxCategory
 */
import React,{Component} from 'react'; 

class JeuxCategory extends Component{
    constructor(props){
        super(props)
    }
  render(){
    return (
      <thead>
        <tr>
          <td style={{"backgroundColor":"brown"}}>{this.props.categorie}</td>
        </tr>
    </thead>
    )
  }
}

export default JeuxCategory;
