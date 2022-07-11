// ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById('root'));

// const root = document.getElementById('root');
// const header = document.createElement('h1');
// header.textContent = "I'm learning React - Imperative Way";
// header.classList.add('header');
// document.getElementById('root').append(header);

// JSX
// const page = (
//   <div>
//   <h1 className="header">This is JSX</h1>
//   <p>This is a paragraph</p>
// </div>
// )

// ReactDOM.render(
//  page,
//   document.getElementById('root')
// )

import React from "react"

const navBar = (
  <nav>
  <h1>My Website</h1>
  <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  </nav>
)

ReactDOM.render(
  navBar, document.getElementById('root')
)




class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
  increment(){
    this.setState({
      count: this.state.count+1
    })
  }
  decrement(){
    this.setState({
      count: this.state.count-1
    })
  }
  reset(){
    this.setState({
      count: 0
    })
  }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
