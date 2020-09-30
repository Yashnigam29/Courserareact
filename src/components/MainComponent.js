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
import { postComment, fetchComments, fetchDishes, fetchPromos } from '../Redux/ActionCreator';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = state =>{
      return{
        dishes: state.dishes,
        comments:state.comments,
        promotions:state.promotion,
        leaders: state.leaders  
      }
}

const mapDispatchToProps = (dispatch) =>({
  postComment:(dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes: () =>{dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () =>{dispatch(fetchComments())},
  fetchPromos: () =>{dispatch(fetchPromos())},

})
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
componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
}

// renderDish(dish){

//         if(dish!=null)
//         {
//             return(
//                 <div className="row">

//                 {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> */}
//                 <DishDetailFuncion dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> 
                
//             </div> 
//             )
//         }
//         else{
//             return(
//                 <div>

//                 </div>
//             )
//         }
//     }

    
  render(){

    const HomePage=() =>{
       return(
         <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
         dishesLoading={this.props.dishes.isLoading}
         dishesErrMess={this.props.dishes.errMess}
         leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
         promotion={this.props.promotions.promotions.filter((promotion)=> promotion.featured)[0]}
         promosLoading={this.props.promotions.isLoading}
         promosErrMess={this.props.promotions.errMess}/>
         
       )
    }

    const DishwithId=({match})=>{
      return(
        <DishDetailFunction dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
         errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        />
      )

    }
  return (
    <div className="App">
        <Header />
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={()=> <MenuFunction dishes={this.props.dishes} /> } />
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route exact path="/contactus" component={() => <ContactReduxComponent resetFeedbackForm={this.props.resetFeedbackForm} />} />  
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
          <Redirect to="/home" /> 
        </Switch>
        </CSSTransition>
        </TransitionGroup>



        
      {/* <Menu dishes={this.state.dishes} 
             onClick={(dishId) => this.onDishSelect(dishId)}/> */}
            

             {/* {this.renderDish(this.state.selectedDish)} */}
            
      
      {/* <Menu1 /> */}
      <Footer />
    </div>
  );
}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
