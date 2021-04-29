import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
      plants: []
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    this.setState(
      {
        plants: [
          ...this.state.plants,
          this.state.item
        ]
      }
    );
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Blumelist</h1>
        </header>

        <section className="main">
          <section className="form">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
          <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                Type:
          <input type="text" name="type" onChange={this.handleChange} />
              </label>
              <label>
                Date:
          <input type="text" name="date" onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <p>
              <strong>What is Blumelist? </strong>
            </p>
            <p>

              A platform to help growers understand a flowering plant's life cycle
            </p>
          </section>

          <section className="output_list">
            <ol className="list">
              {
                this.state.plants.map((plant, key) => {
                  return (
                    <li className="item" id={key}>
                      <p>name: {plant.name}</p>
                      <p>type: {plant.type}</p>
                      <p>date: {plant.date}</p>
                    </li>
                  )
                })
              }
            </ol>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
