import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }

    this.baseState = this.state;

    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleDesc(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let cow = {
      cowName: this.state.name,
      cowDescription: this.state.description
    }
    this.props.add(cow);
    this.setState(this.baseState);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='cow name' value={this.state.name} onChange={this.handleName}/>
          <textarea placeholder='cow description' value={this.state.description} onChange={this.handleDesc}/>
          <input type='submit' value='Add Cow'/>
        </form>
      </div>
    )
  }
}

export default AddCow;