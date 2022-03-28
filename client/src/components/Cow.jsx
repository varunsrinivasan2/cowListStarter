import React from 'react';
import DisplayCow from './DisplayCow.jsx';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    // this.clickedCow = this.clickedCow.bind(this);
  }

  // clickedCow(name, desc) {
  //   // console.log('clicked', this.props);
  //   // let clickedName = this.state.clickedName;
  //   // let clickedDesc = this.state.clickedDesc;
  //   let clickCow = {
  //     cowName: name,
  //     cowDescription: desc
  //   };
  //   console.log('clickcow', clickCow)
  //   // return clickedCow;
  //   this.props.display(clickCow);
  // }

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