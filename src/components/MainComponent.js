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
import Contact from './contactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotion';
import DishDetailFunction from './functionalDish';
import About from './AboutComponent';

class Main extends Component {
  constructor(props){
    super(props);
     
    this.state={
      dishes: DISHES,
      // selectedDish:null
      comments:COMMENTS,
      promotion:PROMOTIONS,
      leaders:LEADERS
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
         <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
         leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
         promotion={this.state.promotion.filter((promotion)=> promotion.featured)[0]}/>
       )
    }

    const DishwithId=({match})=>{
      return(
        <DishDetailFunction dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
        />
      )

    }
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={()=> <MenuFunction dishes={this.state.dishes} /> } />
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route exact path="/contactus" component={Contact} /> 
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} /> } />
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
