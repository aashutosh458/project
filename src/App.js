import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from './component/search-box/search-box.component'; 

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {this.setState({ monsters: users })});
  }

  render() {
    const { monsters, searchField } = this.state;
  
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
     );

    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            console.log(e.target.value)
            this.setState({ searchField: e.target.value });
          }}
        />
        {/* <SearchBox
        placeholder= 'search monster'
      
        /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
