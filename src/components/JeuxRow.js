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
      <thead>
        <tr>
          {this.props.stock === true? <td>{this.props.name}</td>:<td style={{"color":"red"}}>{this.props.name}</td>}
          <td>{this.props.price}</td>
        </tr>
      </thead>
    )
  }
}

export default JeuxRow;
