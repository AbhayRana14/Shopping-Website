//Feature 1
import React from 'react';
import Products from './components/Products';
import data from "./data.json"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:"",
    }
  }
  render(){

  return (
    <div className="grid-container">
      <header>
        <a href="/">Ink Drop Shopping</a>
      </header>
      <main>
        <div className="content">
           <div className="main">
             <Products products={this.state.products}/>
           </div>
           <div className="sidebar">
             Cart Itmes
           </div>
        </div>
      </main>
      <footer>
        All Right is Reserved.
      </footer>
    </div>
  );
  }
}

export default App;
