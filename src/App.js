import React, { Component } from 'react';
// import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
// import { DISHES } from './shared/dishes'
// import Menu1 from './components/menucomponent1';
// import DishDetail from './components/dishdetail';

class App extends Component {
  // constructor(props){
  //   super(props);
     
  //   this.state={
  //     dishes: DISHES
  //   }
  // }
  render(){
  return (
    <div className="App">
      {/* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Resornate  con fusion</NavbarBrand>
        </div>
      </Navbar> */}
      {/* <Menu dishes={this.state.dishes}/> */}
       <Main />
      {/* <Menu1 /> */}
    </div>
  );
}
}
export default App;
