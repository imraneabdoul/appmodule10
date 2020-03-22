/**
 * @author:Imrane
 * Component JeuxRow
 */
import React,{Component} from 'react'; 

class JeuxRow extends Component{
    constructor(props){
        super(props);
    }
  render(){
    return (
      <tr>
          {this.props.stocked == true ? <td>{this.props.jeu}</td>: <td style={{"color":"red"}}>{this.props.jeu}</td>}
          <td>{this.props.price}</td>
      </tr>
    )
  }
}

export default JeuxRow;
