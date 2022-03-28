import React from 'react';
import axios from 'axios';
import ListCows from './ListCows.jsx';
import AddCow from './AddCow.jsx';
import DisplayCow from './DisplayCow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      clickedCow: {},
      displayOn: false
    }

    this.getCows = this.getCows.bind(this);
    this.addCow = this.addCow.bind(this);
    this.displaySingle = this.displaySingle.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios.get('/api/cows')
      .then((res) => {
        this.setState({
          cows: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addCow(cowData) {
    axios.post('/api/cows', cowData)
      .then(res => {
        this.getCows();
      })
      .catch(err => console.log(err))
  }

  displaySingle(name, desc) {
    let cow = {
      name: name,
      desc: desc
    };
    this.setState({
      clickedCow: cow,
      displayOn: true
    });
  }

  close() {
    this.setState({
      displayOn: false
    })
  }

  render() {
    return (
      <div>
        <h1>Cows Moo</h1>
        {this.state.displayOn && <DisplayCow cow={this.state.clickedCow} close={this.close}/>}
        <AddCow add={this.addCow}/>
        <ListCows cows={this.state.cows} display={this.displaySingle}/>
      </div>
    )
  }
}

export default App;