import React, { Component } from 'react';
import DishDetail from './dishdetail';
import Menu from './Menucomponent';
import MenuFunction from './functionalMenu';
import DishDetailFuncion from './functionalDish';
import Header from './HeaderComonent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './contactComponent';
// import { DISHES } from '../shared/dishes'
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leader';
// import { PROMOTIONS } from '../shared/promotion';
import DishDetailFunction from './functionalDish';
import About from './AboutComponent';
import { connect } from 'react-redux';
import ContactReduxComponent from './ContactReduxComponent';

const mapStateToProps = state =>{
      return{
        dishes: state.dishes,
        comments:state.comments,
        promotion:state.promotion,
        leaders: state.leaders  
      }
}

class Main extends Component {
  constructor(props){
    super(props);
     
    // this.state={
    //   dishes: DISHES,
    //   // selectedDish:null
    //   comments:COMMENTS,
    //   promotion:PROMOTIONS,
    //   leaders:LEADERS
    // };
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
                <DishDetailFuncion dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> 
                
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
         <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
         leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
         promotion={this.props.promotion.filter((promotion)=> promotion.featured)[0]}/>
       )
    }

    const DishwithId=({match})=>{
      return(
        <DishDetailFunction dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
        />
      )

    }
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={()=> <MenuFunction dishes={this.props.dishes} /> } />
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route exact path="/contactus" component={ContactReduxComponent} /> 
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
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
export default withRouter(connect(mapStateToProps)(Main));
