import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import DishDetail from './dishdetail';
import Menu from './Menucomponent';
import MenuFunction from './functionalMenu';
import DishDetailFuncion from './functionalDish';
import Header from './HeaderComonent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
  constructor(props){
    super(props);
     
    this.state={
      dishes: DISHES,
      // selectedDish:null
    };
  }

//   onDishSelect(dishId){ 
//     this.setState({
//         selectedDish: dishId
//     })             
// }

renderDish(dish){

        if(dish!=null)
        {
            return(
                <div className="row">

                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> */}
                <DishDetailFuncion dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> 
                
            </div> 
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
  
  render(){

    const HomePage=() =>{
       return(
         <Home />
       )
    }
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} /> } />
          <Redirect to="/home" /> 
        </Switch>



        
      {/* <Menu dishes={this.state.dishes} 
             onClick={(dishId) => this.onDishSelect(dishId)}/> */}
            

             {/* {this.renderDish(this.state.selectedDish)} */}
            
      
      {/* <Menu1 /> */}
      <Footer />
    </div>
  );
}
}
export default Main;
