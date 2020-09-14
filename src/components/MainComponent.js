import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import DishDetail from './dishdetail';
import Menu from './Menucomponent';
import MenuFunction from './functionalMenu';
import DishDetailFuncion from './functionalDish';
import Header from './HeaderComonent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props){
    super(props);
     
    this.state={
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId){ 
    this.setState({
        selectedDish: dishId
    })             
}

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
  return (
    <div className="App">
        <Header />
      {/* <Menu dishes={this.state.dishes} 
             onClick={(dishId) => this.onDishSelect(dishId)}/> */}
             <MenuFunction dishes={this.state.dishes} 
             onClick={(dishId) => this.onDishSelect(dishId)}/>

             {this.renderDish(this.state.selectedDish)}
            
       {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> */}
      {/* <Menu1 /> */}
      <Footer />
    </div>
  );
}
}
export default Main;
