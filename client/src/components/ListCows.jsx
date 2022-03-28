import React from 'react';
import Cow from './Cow.jsx';

class ListCows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-cows">
        <ul>
          {this.props.cows.map(cow => {
            return (
              <Cow key={cow.id} cow={cow} display={this.props.display}/>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ListCows;