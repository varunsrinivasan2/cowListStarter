import React from 'react';
import DisplayCow from './DisplayCow.jsx';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    let name = this.props.cow.cowName;
    let desc = this.props.cow.cowDescription
    let display = this.props.display;
    return (
      <div className="each-cow">
        {/* <DisplayCow cow={this.props.cow}/> */}
        <li onClick={() => display(name, desc)}>{name}</li>
      </div>
    )
  }
}

export default Cow;