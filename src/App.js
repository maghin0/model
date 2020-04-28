import React, {Component}  from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list';
class App extends Component {
constructor() {
  super();
  this.state ={
    models: [],
    searchField: ''
  }
}

// componentDidMount(){
//   fetch(https://api.instagram.com/v1/self/media/recent?access_token=)
//   .then(response => response.json())
//   .then(users => this.setState({ model: users }))
// }

 render() {
  return (
    <div className="App">
    <CardList name="Martha" />
      {this.state.models.map(model => (<h1 key={model.id}>{model.name}</h1>))}
    </div>
  );
}
}

export default App;
